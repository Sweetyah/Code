import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';
import YouTube from 'react-native-youtube';

const HealthVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Health" alignment="center" />
        <Divider />
        <Layout style={{padding: 16}}>
          <YouTube
            apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
            videoId="EP3DlplARSY"
            style={{alignSelf: 'stretch', height: 300}}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default HealthVdoScreen;

const styles = StyleSheet.create({});
