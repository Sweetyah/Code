import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import KnowledgeScreen from '../screens/Knowledge';
import SettingsScreen from '../screens/Settings';
import MapScreen from '../screens/Map';
import SOSScreen from '../screens/SOS';
import EMSScreen from '../screens/EMS';
import {TabBar, Tab, Icon} from '@ui-kitten/components';
import useFirebaseUserData from '../hooks/useFirebaseUserData';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeIcon = props => <Icon {...props} name="home-outline" />;
const MapIcon = props => <Icon {...props} name="map-outline" />;
const AlertCircleIcon = props => (
  <Icon {...props} name="alert-circle-outline" />
);
const CallIcon = props => <Icon {...props} name="phone-call-outline" />;
const SettingsIcon = props => <Icon {...props} name="settings-2-outline" />;
const MainTabBar = ({navigation, state}) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab icon={HomeIcon} title="Knowledge" />
    <Tab icon={MapIcon} title="Map" />
    <Tab icon={AlertCircleIcon} title="SOS" />
    <Tab icon={CallIcon} title="EMS" />
    <Tab icon={SettingsIcon} title="Settings" />
  </TabBar>
);

const MainTabNavigator = () => {
  const userData = useFirebaseUserData();

  return (
    <Navigator tabBar={props => <MainTabBar {...props} />}>
      <Screen name="Knowledge" component={KnowledgeScreen} />
      <Screen name="Map" component={MapScreen} />
      <Screen name="SOS" component={SOSScreen} />
      <Screen name="EMS" component={EMSScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};

export default MainTabNavigator;
