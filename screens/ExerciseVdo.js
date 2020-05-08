import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

import YouTube from 'react-native-youtube';

const ExerciseVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Exercise" alignment="center" />
        <Divider />
        <Layout style={{flex: 1, padding: 16}}>
          <YouTube
            apiKey="AIzaSyAM-1qx65gwSFDZziAaaLBiu8zX6MlTxqg"
            videoId="L4I3kmZkoz4"
            style={{alignSelf: 'stretch', height: 300}}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default ExerciseVdoScreen;

const styles = StyleSheet.create({});
