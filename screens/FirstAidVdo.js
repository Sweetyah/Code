import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

import YouTube from 'react-native-youtube';

const FirstAidVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="First Aid" alignment="center" />
        <Divider />
        <Layout style={{padding: 16}}>
          <YouTube
            apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
            videoId="0uAZzOrKkm0"
            style={{alignSelf: 'stretch', height: 300}}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default FirstAidVdoScreen;

const styles = StyleSheet.create({});
