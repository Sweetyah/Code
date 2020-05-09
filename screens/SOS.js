import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Alert, Platform} from 'react-native';
import {
  Layout,
  Text,
  Card,
  TabView,
  Tab,
  List,
  ListItem,
  Button,
} from '@ui-kitten/components';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import useFirebaseUser from '../hooks/useFirebaseUser';
import useFirebaseUserData from '../hooks/useFirebaseUserData';

import firestore from '@react-native-firebase/firestore';

import Geolocation from '@react-native-community/geolocation';

import {ucFirst} from '../utils/common';

const SOSScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [history, setHistory] = useState([]);

  const user = useFirebaseUser();

  const userData = useFirebaseUserData();

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore()
        .collection('requests')
        .where('uid', '==', user.uid)
        .onSnapshot(
          querySnapshot => {
            let targetHistory = [];
            querySnapshot.docs.forEach(item => {
              let current = item.data();
              current.id = item.id;
              targetHistory.push(item.data());
            });
            setHistory(targetHistory);
          },
          error => {
            console.error(error);
          },
        );

      return unsubscribe;
    }
  }, [user]);

  const handleRequest = ({type}) => {
    Alert.alert(
      'SOS Request',
      'Are you sure to request?',
      type !== 'emergency'
        ? [
            {text: 'Cancel', onPress: () => {}},
            {
              text: 'OK',
              onPress: () => {
                Geolocation.getCurrentPosition(position => {
                  const {coords} = position;

                  firestore()
                    .collection('requests')
                    .add({
                      uid: user.uid,
                      name: userData.name,
                      request_type: type,
                      status: 'waiting',
                      request_at: new Date().toISOString(),
                      latitude: coords.latitude,
                      longitude: coords.longitude,
                      helper: 'no-one',
                    })
                    .then(value => {
                      alert('SOS is requested to global');
                    })
                    .catch(reason => {
                      alert('SOS request is failed');
                    });
                });
              },
            },
            {
              text: 'Call Emergency',
              onPress: async () => {
                if (Platform.OS === 'android') {
                  let response = await request(PERMISSIONS.ANDROID.CALL_PHONE);
                  console.log({response});

                  switch (response) {
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
                      RNImmediatePhoneCall.immediatePhoneCall(
                        userData.emergency_phone,
                      );
                      break;
                    case RESULTS.BLOCKED:
                      console.log(
                        'The permission is denied and not requestable anymore',
                      );
                      break;
                  }
                }
              },
            },
          ]
        : [
            {text: 'Cancel', onPress: () => {}},
            {
              text: 'OK',
              onPress: () => {
                Geolocation.getCurrentPosition(position => {
                  const {coords} = position;

                  firestore()
                    .collection('requests')
                    .add({
                      uid: user.uid,
                      name: userData.name,
                      request_type: type,
                      status: 'waiting',
                      request_at: new Date().toISOString(),
                      latitude: coords.latitude,
                      longitude: coords.longitude,
                      helper: 'no-one',
                    })
                    .then(value => {
                      alert('SOS is requested to global');
                    })
                    .catch(reason => {
                      alert('SOS request is failed');
                    });
                });
              },
            },
          ],
    );
  };

  const renderItem = ({item, index}) => (
    <ListItem
      accessoryRight={() => {
        if (item.status === 'waiting') {
          return (
            <Button
              onPress={() => {
                Alert.alert(
                  'SOS Request',
                  'Are you sure to cancel this request?',
                  [
                    {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                    {
                      text: 'OK',
                      onPress: () => {
                        firestore()
                          .collection('requests')
                          .doc(item.id)
                          .delete()
                          .then(value => {
                            alert('The request is canceled');
                          })
                          .catch(reason => {
                            alert(
                              'Cannot cancel the request now, please try again',
                            );
                          });
                      },
                    },
                  ],
                );
              }}
              size="tiny">
              Cancel
            </Button>
          );
        }
      }}
      title={`${item.request_type ? ucFirst(item.request_type) : ''}${
        item.status ? ` - ${ucFirst(item.status)}` : ''
      }`}
      description={
        item.request_at ? new Date(item.request_at).toUTCString() : ''
      }
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <Layout style={{flex: 1}}>
          <TabView
            style={{flex: 1}}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Tab title="Request">
              <Layout style={{flex: 1, alignItems: 'flex-end', padding: 8}}>
                <Card
                  onPress={() => handleRequest({type: 'emergency'})}
                  style={styles.emergency}
                  status="success">
                  <Text category="h5">Emergency</Text>
                </Card>
                <Card
                  onPress={() => handleRequest({type: 'danger'})}
                  style={styles.danger}
                  status="warning">
                  <Text category="h3">Danger</Text>
                </Card>
                <Card
                  onPress={() => handleRequest({type: 'fatal'})}
                  style={styles.fetal}
                  status="danger">
                  <Text category="h1">Fetal</Text>
                </Card>
              </Layout>
            </Tab>
            <Tab title="History">
              <Layout style={{flex: 1, padding: 8}}>
                {!history.length && <Text>No Request History</Text>}
                <List data={history} renderItem={renderItem} />
              </Layout>
            </Tab>
          </TabView>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default SOSScreen;

const styles = StyleSheet.create({
  emergency: {
    width: '50%',
    height: '25%',
    backgroundColor: '#5cb85c',
  },
  danger: {
    width: '75%',
    height: '35%',
    backgroundColor: '#f0ad4e',
  },
  fetal: {
    width: '100%',
    height: '40%',
    backgroundColor: '#d9534f',
  },
});
