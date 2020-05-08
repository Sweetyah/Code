import React from 'react';
import {StyleSheet, SafeAreaView, Alert} from 'react-native';
import {
  Layout,
  Button,
  List,
  ListItem,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';

import auth from '@react-native-firebase/auth';

import {messageForAuthErrorCode} from '../utils/firebaseAuth';

const SettingsScreen = ({navigation}) => {
  const data = [
    {
      title: 'Profile',
      onPress: () => {
        navigation.navigate('Profile');
      },
    },
    {
      title: 'Sign Out',
      onPress: () => {
        // handleSignOut();
        Alert.alert('Sign Out', 'Are you sure to sign out?', [
          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
          {
            text: 'OK',
            onPress: () => {
              auth().signOut();
            },
          },
        ]);
      },
    },
  ];

  // const handleSignOut = () => {
  //   auth()
  //     .signOut()
  //     .catch(reason => {
  //       alert(messageForAuthErrorCode(reason.code));
  //     });
  // };

  const renderItem = ({item, index}) => (
    <ListItem
      onPress={() => {
        if (item.onPress && typeof item.onPress === 'function') {
          item.onPress();
        }
      }}
      title={item.title ? item.title : ''}
      description={item.description ? item.description : ''}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Settings" />
        <Divider />
        <Layout style={{flex: 1}}>
          {/* <Button onPress={handleSignOut}>Sign Out</Button> */}
          <List
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
