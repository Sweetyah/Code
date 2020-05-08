import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, Card, Avatar} from '@ui-kitten/components';

const cards = [
  {
    title: 'Health',
    subtitle: 'สุขภาพ',
    icon: require('../images/health_logo.png'),
    target: 'Health',
  },
  {
    title: 'Food',
    subtitle: 'อาหาร',
    icon: require('../images/food_logo.png'),
    target: 'Food',
  },
  {
    title: 'Exercise',
    subtitle: 'ออกกำลังกาย',
    icon: require('../images/exercise_logo.png'),
    target: 'Exercise',
  },
  {
    title: 'First Aid',
    subtitle: 'การปฐมพยาบาล',
    icon: require('../images/first_aid_logo.png'),
    target: 'FirstAid',
  },
  {
    title: 'Accident Prevention',
    subtitle: 'การป้องกันอุบัติเหตุ',
    icon: require('../images/accident_prevention_logo.png'),
    target: 'AccidentPrevent',
  },
  {
    title: 'Diagnosis',
    subtitle: 'โรคและอาการ',
    icon: require('../images/diagnosis_logo.png'),
    target: 'Diagnosis',
  },
];

const KnowledgeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <Layout>
          {cards.map((card, index) => (
            <Card
              key={index}
              onPress={() => {
                if (card.target) {
                  navigation.navigate(card.target);
                }
              }}>
              <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                  source={card.icon ? card.icon : null}
                  style={{marginRight: 16}}
                />
                <Layout>
                  <Text>{card.title ? card.title : ''}</Text>
                  <Text>{card.subtitle ? card.subtitle : ''}</Text>
                </Layout>
              </Layout>
            </Card>
          ))}
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default KnowledgeScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
