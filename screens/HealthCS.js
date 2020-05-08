import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const HealthCSScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Health" alignment="center" />
        <Divider />
        <Layout>
          <Text>Common Symptoms</Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default HealthCSScreen;

const styles = StyleSheet.create({});
