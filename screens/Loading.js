import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <Layout>
          <Text>Loading...</Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
