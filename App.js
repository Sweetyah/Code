import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {NavigationContainer} from '@react-navigation/native';

import {GoogleSignin} from '@react-native-community/google-signin';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';
Geolocation.setRNConfiguration();

import {FirebaseContext} from './contexts/FirebaseContext';

import LoadingScreen from './screens/Loading';
import PublicStackNavigator from './navigators/PublicStack';
import ProtectedStackNavigator from './navigators/ProtectedStack';
import MainTabNavigator from './navigators/MainTab';
import MainStackNavigator from './navigators/MainStack';
import {LocationContext} from './contexts/LocationContext';

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // setUser({});
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const bootstrapAsync = async () => {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId:
          '592682224631-44n0d5vropjijv2rcobn2gff6gm3a5au.apps.googleusercontent.com',
      });
    };
    bootstrapAsync();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            const watchId = Geolocation.watchPosition(
              position => {
                console.log('on got position', {position});
                setCurrentLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
              },
              error => {
                console.error(error);
              },
            );

            return () => Geolocation.clearWatch(watchId);
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      // setUserData({});
      // TODO: call Firebase Firestore
      const unsubscribe = firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(
          querySnapshot => {
            const data = querySnapshot.data();
            console.log(data);
            setUserData(data);
          },
          error => {
            console.error(error);
          },
        );
      return unsubscribe;
    }
  }, [user]);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  const renderWithCondition = () => {
    if (initializing) {
      return <LoadingScreen />;
    }
    if (user) {
      if (!userData) {
        return <ProtectedStackNavigator />;
      }
      return <MainStackNavigator />;
    } else {
      return <PublicStackNavigator />;
    }
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <FirebaseContext.Provider value={{user, userData}}>
          <LocationContext.Provider value={{currentLocation}}>
            <NavigationContainer>{renderWithCondition()}</NavigationContainer>
          </LocationContext.Provider>
        </FirebaseContext.Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
