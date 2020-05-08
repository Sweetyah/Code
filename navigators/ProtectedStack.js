import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Register';

const {Navigator, Screen} = createStackNavigator();

const ProtectedStackNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Register" component={RegisterScreen} />
    </Navigator>
  );
};

export default ProtectedStackNavigator;
