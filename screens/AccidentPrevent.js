import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  List,
  Card,
  Avatar,
  ListItem,
  Icon,
} from '@ui-kitten/components';

const BookIcon = props => <Icon {...props} name="book-outline" />;
const ListIcon = props => <Icon {...props} name="list-outline" />;
const VdoIcon = props => <Icon {...props} name="film-outline" />;
const FileTextIcon = props => <Icon {...props} name="file-text-outline" />;

const menus = [
  {
    title: 'Knowledge',
    subtitle: 'ความรู้',
    icon: BookIcon,
    target: 'AccidentPreventKnowledge',
  },
  // {
  //   title: 'Videos',
  //   subtitle: 'วิดีโอ',
  //   icon: VdoIcon,
  //   target: 'AccidentPreventVdo',
  // },
  // {
  //   title: 'Evaluation',
  //   subtitle: 'การประเมิน',
  //   icon: FileTextIcon,
  //   target: 'FoodEval',
  // },
];

const AccidentPreventScreen = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <ListItem
      accessoryLeft={item.icon ? item.icon : null}
      onPress={() => {
        if (item.target) {
          navigation.navigate(item.target);
        }
      }}
      title={item.title ? item.title : ''}
      description={item.subtitle ? item.subtitle : ''}
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Accident Prevention" alignment="center" />
        <Divider />
        <Layout>
          <List
            data={menus}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default AccidentPreventScreen;

const styles = StyleSheet.create({});
