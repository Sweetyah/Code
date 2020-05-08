import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

import YouTube from 'react-native-youtube';

const FoodVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Food" alignment="center" />
        <Divider />
        <ScrollView>
          <Layout style={{padding: 16}}>
            <YouTube
              apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
              videoId="3lZaK_ksbR4"
              style={{alignSelf: 'stretch', height: 300}}
            />
            {/* <YouTube
              apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
              videoId="R64UV_TWXYU"
              style={{alignSelf: 'stretch', height: 300}}
            />
            <YouTube
              apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
              videoId="3pxSBA1ub3c"
              style={{alignSelf: 'stretch', height: 300}}
            /> */}
          </Layout>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default FoodVdoScreen;

const styles = StyleSheet.create({});
