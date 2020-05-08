import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const DiagnosisVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Diagnosis" alignment="center" />
        <Divider />
        <Layout>
          <Text>Videos</Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default DiagnosisVdoScreen;

const styles = StyleSheet.create({});
