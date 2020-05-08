import React, {useState, useEffect, useRef, createRef} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
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
              const data = item.data();
              if (data.uid !== user.uid) {
                loaded.push(item.data());
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
          {item.helper === 'no-one' && <Button size="small">Help</Button>}
          {item.helper === user.uid && (
            <Button status="success" size="small">
              Success
            </Button>
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
              latitude: 37.78825,
              longitude: -122.4324,
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
              Current
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
