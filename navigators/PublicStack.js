import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

const PublicStackNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};

export default PublicStackNavigator;
