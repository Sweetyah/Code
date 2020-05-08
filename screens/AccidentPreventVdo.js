import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const AccidentPreventVdoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Accident Prevention" alignment="center" />
        <Divider />
        <Layout>
          <Text>Videos</Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default AccidentPreventVdoScreen;

const styles = StyleSheet.create({});
