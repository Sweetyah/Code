import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import {
  Layout,
  Button,
  Input,
  TopNavigation,
  Divider,
} from '@ui-kitten/components';
import useFirebaseUserData from '../hooks/useFirebaseUserData';

import firestore from '@react-native-firebase/firestore';
import useFirebaseUser from '../hooks/useFirebaseUser';

const Profile = ({navigation}) => {
  const user = useFirebaseUser();
  const userData = useFirebaseUserData();

  const [name, setName] = useState(userData.name);
  const [gender, setGender] = useState(userData.gender);
  const [bloodType, setBloodType] = useState(userData.blood_type);
  const [age, setAge] = useState(userData.age.toString());
  const [ud, setUd] = useState(userData.underlying_disease);
  const [phone, setPhone] = useState(userData.phone);
  const [ePhone, setEPhone] = useState(userData.emergency_phone);

  const handleSaveChangesPress = () => {
    Alert.alert('User Profile', 'Are you sure to save your profile?', [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {
        text: 'OK',
        onPress: () => {
          // TODO: add check
          firestore()
            .collection('users')
            .doc(user.uid)
            .set({
              name,
              gender,
              blood_type: bloodType,
              age: parseInt(age),
              underlying_disease: ud,
              phone,
              emergency_phone: ePhone,
              user_type: parseInt(age) > 60 ? 'elder' : 'normal',
            })
            .then(value => {
              navigation.goBack();
            })
            .catch(reason => {
              console.log(reason);
            });
        },
      },
    ]);
  };

  const handleCancelPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="User Profile" />
        <Divider />
        <ScrollView>
          <Layout
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16,
            }}>
            <Input
              label="Name"
              onChangeText={nextValue => setName(nextValue)}
              placeholder="Your name"
              style={styles.input}
              value={name}
            />
            <Input
              label="Gender"
              onChangeText={nextValue => setGender(nextValue)}
              placeholder="e.g. Male or Female"
              style={styles.input}
              value={gender}
            />
            <Input
              label="Blood Type"
              onChangeText={nextValue => setBloodType(nextValue)}
              placeholder="e.g. A, B, AB or O"
              style={styles.input}
              value={bloodType}
            />
            <Input
              label="Age"
              onChangeText={nextValue => setAge(nextValue)}
              style={styles.input}
              value={age}
            />
            <Input
              label="Underlying Disease"
              onChangeText={nextValue => setUd(nextValue)}
              placeholder="Your underlying disease"
              style={styles.input}
              value={ud}
            />
            <Input
              label="Phone No."
              onChangeText={nextValue => setPhone(nextValue)}
              placeholder="0xxxxxxxxx"
              style={styles.input}
              textContentType="telephoneNumber"
              value={phone}
            />
            <Input
              label="Emergency Phone No."
              onChangeText={nextValue => setEPhone(nextValue)}
              placeholder="0xxxxxxxxx"
              style={styles.input}
              textContentType="telephoneNumber"
              value={ePhone}
            />
            <Layout
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Button onPress={handleSaveChangesPress} style={styles.btn}>
                Save changes
              </Button>
              <Button onPress={handleCancelPress} style={styles.btn}>
                Cancel
              </Button>
            </Layout>
          </Layout>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btn: {
    margin: 8,
  },
  input: {
    marginBottom: 8,
  },
});
