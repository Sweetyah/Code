import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTab';
import Profile from '../screens/Profile';
import HealthScreen from '../screens/Health';
import HealthKnowledgeScreen from '../screens/HealthKnowledge';
import HealthVdoScreen from '../screens/HealthVdo';
import HealthCSScreen from '../screens/HealthCS';
import HealthEvalScreen from '../screens/HealthEval';
import FoodScreen from '../screens/Food';
import FoodKnowledgeScreen from '../screens/FoodKnowledge';
import FoodVdoScreen from '../screens/FoodVdo';
import FoodEvalScreen from '../screens/FoodEval';
import ExerciseScreen from '../screens/Exercise';
import ExerciseKnowledgeScreen from '../screens/ExerciseKnowledge';
import ExerciseVdoScreen from '../screens/ExerciseVdo';
import ExerciseEvalScreen from '../screens/ExerciseEval';
import FirstAidScreen from '../screens/FirstAid';
import FirstAidKnowledgeScreen from '../screens/FirstAidKnowledge';
import FirstAidVdoScreen from '../screens/FirstAidVdo';
import AccidentPreventScreen from '../screens/AccidentPrevent';
import AccidentPreventKnowledgeScreen from '../screens/AccidentPreventKnowledge';
import AccidentPreventVdoScreen from '../screens/AccidentPreventVdo';
import DiagnosisScreen from '../screens/Diagnosis';
import DiagnosisKnowledgeScreen from '../screens/DiagnosisKnowledge';
import DiagnosisVdoScreen from '../screens/DiagnosisVdo';

const {Navigator, Screen} = createStackNavigator();

const MainStackScreen = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={MainTabNavigator} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Health" component={HealthScreen} />
      <Screen name="HealthKnowledge" component={HealthKnowledgeScreen} />
      <Screen name="HealthCS" component={HealthCSScreen} />
      <Screen name="HealthVdo" component={HealthVdoScreen} />
      <Screen name="HealthEval" component={HealthEvalScreen} />
      <Screen name="Food" component={FoodScreen} />
      <Screen name="FoodKnowledge" component={FoodKnowledgeScreen} />
      <Screen name="FoodVdo" component={FoodVdoScreen} />
      <Screen name="FoodEval" component={FoodEvalScreen} />
      <Screen name="Exercise" component={ExerciseScreen} />
      <Screen name="ExerciseKnowledge" component={ExerciseKnowledgeScreen} />
      <Screen name="ExerciseVdo" component={ExerciseVdoScreen} />
      <Screen name="ExerciseEval" component={ExerciseEvalScreen} />
      <Screen name="FirstAid" component={FirstAidScreen} />
      <Screen name="FirstAidKnowledge" component={FirstAidKnowledgeScreen} />
      <Screen name="FirstAidVdo" component={FirstAidVdoScreen} />
      <Screen name="AccidentPrevent" component={AccidentPreventScreen} />
      <Screen
        name="AccidentPreventKnowledge"
        component={AccidentPreventKnowledgeScreen}
      />
      <Screen name="AccidentPreventVdo" component={AccidentPreventVdoScreen} />
      <Screen name="Diagnosis" component={DiagnosisScreen} />
      <Screen name="DiagnosisKnowledge" component={DiagnosisKnowledgeScreen} />
      <Screen name="DiagnosisVdo" component={DiagnosisVdoScreen} />
    </Navigator>
  );
};

export default MainStackScreen;
