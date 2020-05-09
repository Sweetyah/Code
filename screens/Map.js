import React, {useState, useEffect, useRef, createRef} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions, Alert} from 'react-native';
import {Layout, Text, Card, Button} from '@ui-kitten/components';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {} from '@ui-kitten/components';

import Carousel from 'react-native-snap-carousel';

import useFirebaseUser from '../hooks/useFirebaseUser';

import firestore from '@react-native-firebase/firestore';
import {ucFirst} from '../utils/common';
import useCurrentLocation from '../hooks/useCurrentLocation';

const MapScreen = () => {
  const [reqs, setReqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const user = useFirebaseUser();
  const current = useCurrentLocation();

  const carouselRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore()
        .collection('requests')
        .onSnapshot(
          querySnapshot => {
            let loaded = [];
            querySnapshot.docs.forEach(item => {
              let data = item.data();
              const id = item.id;
              data = Object.assign({}, data, {id});
              if (data.uid !== user.uid) {
                if (data.status !== 'success') {
                  loaded.push(data);
                }
              }
            });
            setReqs(loaded);
            console.log({loaded});
          },
          error => {
            console.error(error);
          },
        );

      return unsubscribe;
    }
  }, [user]);

  const _renderItem = ({item, index}) => (
    <Card
      footer={props => (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: 8,
          }}>
          {item.helper === 'no-one' && (
            <Button onPress={() => handleHelp(index)} size="small">
              Help
            </Button>
          )}
          {item.helper === user.uid && (
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => handleCancel(index)}
                status="danger"
                size="small">
                Cancel
              </Button>
              <Button
                onPress={() => handleSuccess(index)}
                status="success"
                size="small">
                Success
              </Button>
            </View>
          )}
        </View>
      )}
      onPress={() => {
        onCarouselItemChange(index);
      }}>
      <Text>Name: {item.name}</Text>
      <Text>
        Type: {ucFirst(item.request_type)} - {ucFirst(item.status)}
      </Text>
      <Text>When: {new Date(item.request_at).toUTCString()}</Text>
    </Card>
  );

  const onCarouselItemChange = index => {
    setActiveIndex(index);

    let location = reqs[index];

    mapRef.current.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handleHelp = index => {
    const target = reqs[index];
    Alert.alert('Help confirm', 'Are you sure you can help him/her?', [
      {text: 'No', onPress: () => {}, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('requests')
            .doc(target.id)
            .update({status: 'helped', helper: user.uid})
            .then(value => {
              alert('Hurry!, Let help him/her');
            })
            .catch(reason => {
              console.error(reason);
              alert('Sorry, you cannot help him/her now, please try agin');
            });
        },
      },
    ]);
    // console.log(reqs[index]);
  };

  const handleCancel = index => {
    // console.log(reqs[index]);
    const target = reqs[index];
    Alert.alert('Help confirm', 'Are you sure to cancel to help him/her?', [
      {text: 'No', onPress: () => {}, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('requests')
            .doc(target.id)
            .update({status: 'waiting', helper: 'no-one'})
            .then(value => {
              alert('You cancel to help him/her yet');
            })
            .catch(reason => {
              console.error(reason);
              alert(
                'Sorry, you cannot cancel to help him/her now, please try agin',
              );
            });
        },
      },
    ]);
  };

  const handleSuccess = index => {
    // console.log(reqs[index]);
    const target = reqs[index];
    Alert.alert('Help confirm', 'Are you help him/her success?', [
      {text: 'No', onPress: () => {}, style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection('requests')
            .doc(target.id)
            .update({status: 'success'})
            .then(value => {
              alert('Thank you for helping him/her');
            })
            .catch(reason => {
              console.error(reason);
              alert('Sorry, you cannot update status now, please try agin');
            });
        },
      },
    ]);
  };

  return (
    // <View style={styles.container}>
    //   <MapView
    //     provider={PROVIDER_GOOGLE}
    //     style={styles.map}
    //     initialRegion={{
    //       latitude: 37.78825,
    //       longitude: -122.4324,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     }}
    //   />
    // </View>
    <SafeAreaView style={{flex: 1}}>
      <>
        <Layout style={{height: '70%'}}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: current.latitude,
              longitude: current.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}>
            {reqs.map((item, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}>
                <Callout>
                  <Text>{ucFirst(item.request_type)}</Text>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </Layout>
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Carousel
            ref={carouselRef}
            layout={'stack'}
            data={reqs}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={(Dimensions.get('window').width / 100) * 90}
            renderItem={_renderItem}
            onSnapToItem={index => onCarouselItemChange(index)}
            style={{position: 'absolute', bottom: 50}}
          />
          <Layout style={{flexDirection: 'row'}}>
            <Button
              onPress={() => {
                mapRef.current.animateToRegion({
                  latitude: current.latitude,
                  longitude: current.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }}
              size="tiny">
              Me
            </Button>
          </Layout>
          {!reqs.length && <Text>Not found any request</Text>}
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  // container: {
  //   ...StyleSheet.absoluteFillObject,
  //   height: 400,
  //   width: 400,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
