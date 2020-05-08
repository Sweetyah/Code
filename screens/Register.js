import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Alert} from 'react-native';
import {
  Layout,
  Button,
  Input,
  TopNavigation,
  Divider,
} from '@ui-kitten/components';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {messageForAuthErrorCode} from '../utils/firebaseAuth';
import useFirebaseUser from '../hooks/useFirebaseUser';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [age, setAge] = useState('');
  const [ud, setUd] = useState('');
  const [phone, setPhone] = useState('');
  const [ePhone, setEPhone] = useState('');

  const user = useFirebaseUser();

  const handleRegisterPres = () => {
    Alert.alert('Register', 'Are you sure to save your profile?', [
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
            .catch(reason => {
              console.log(reason);
            });
        },
      },
    ]);
  };

  const handleCancelPress = () => {
    Alert.alert('Register cancel', 'Are you sure to cancel?', [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {
        text: 'OK',
        onPress: () => {
          auth()
            .signOut()
            .catch(reason => {
              alert(messageForAuthErrorCode(reason.code));
            });
        },
      },
    ]);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation title="Register" />
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
              <Button onPress={handleRegisterPres} style={styles.btn}>
                Register
              </Button>
              <Button onPress={handleCancelPress} style={styles.btn}>
                Cancel
              </Button>
            </Layout>
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  btn: {
    margin: 8,
  },
  input: {
    marginBottom: 8,
  },
});
