import React, {useState, useRef} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  TopNavigation,
  Divider,
  Layout,
  Button,
  Input,
  Icon,
  Text,
} from '@ui-kitten/components';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import {messageForAuthErrorCode} from '../utils/firebaseAuth';

const FacebookIcon = props => <Icon name="facebook" {...props} />;
const GoogleIcon = props => <Icon name="google-outline" {...props} />;

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfPassword, setCfPassword] = useState('');
  const [emailExist, setEmailExist] = useState(false);
  const [mustSignup, setMustSignup] = useState(false);

  const emailRef = useRef(null);

  const handleCheckEmail = () => {
    if (email !== '') {
      emailRef.current.blur();
      auth()
        .fetchSignInMethodsForEmail(email)
        .then(value => {
          // alert(JSON.stringify(value));
          if (value.length) {
            setEmailExist(true);
          } else {
            setMustSignup(true);
          }
        })
        .catch(reason => {
          alert(messageForAuthErrorCode(reason.code));
        });
    } else {
      alert('E-mail is required');
    }
  };

  const handleEmailFocus = () => {
    setEmailExist(false);
    setMustSignup(false);
  };

  const handleSignInWithEmail = () => {
    if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch(reason => {
          alert(messageForAuthErrorCode(reason.code));
        });
    } else {
      alert('Email and Password is required');
    }
  };

  const handleSignupWithEmail = () => {
    if (email !== '' && password !== '' && cfPassword !== '') {
      if (password === cfPassword) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(reason => {
            alert(messageForAuthErrorCode(reason.code));
          });
      } else {
        alert('Password and re-Password mismatch');
      }
    } else {
      alert('E-mail, Password, and re-Password is required');
    }
  };

  const handleSignInWithFacebook = async () => {
    // alert('Sign in with Facebook');
    // TODO: add reject handler

    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  const handleSignInWithGoogle = async () => {
    // alert('Sign in with Google');
    // TODO: add reject handler

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TopNavigation title="Sign In" />
      <Divider /> */}
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <Text category="h3" style={styles.title}>
          Eldercare
        </Text>
        <Input
          label="E-mail"
          onChangeText={nextValue => setEmail(nextValue)}
          onFocus={handleEmailFocus}
          placeholder="E-mail"
          ref={emailRef}
          value={email}
        />
        {(emailExist || mustSignup) && (
          <Input
            caption="Should contain at least 8 characters"
            label="Password"
            onChangeText={nextValue => setPassword(nextValue)}
            placeholder="Password"
            secureTextEntry={true}
            style={{marginBottom: 8}}
            value={password}
          />
        )}
        {!emailExist && !mustSignup && (
          <Button onPress={handleCheckEmail} style={styles.btn}>
            Check
          </Button>
        )}
        {emailExist && (
          <Button onPress={handleSignInWithEmail} style={styles.btn}>
            Sign In
          </Button>
        )}
        {mustSignup && (
          <>
            <Input
              caption="Should contain at least 8 characters"
              label="re-Password"
              onChangeText={nextValue => setPassword(nextValue)}
              placeholder="re-Password"
              secureTextEntry={true}
              style={{marginBottom: 8}}
              value={password}
            />
            <Button onPress={handleSignupWithEmail} style={styles.btn}>
              Sign up
            </Button>
          </>
        )}
        <Button
          accessoryLeft={FacebookIcon}
          onPress={handleSignInWithFacebook}
          style={styles.btn}>
          Login with Facebook
        </Button>
        <Button
          accessoryLeft={GoogleIcon}
          onPress={() => handleSignInWithGoogle().then(value => {})}
          style={styles.btn}>
          Login with Google
        </Button>
      </Layout>
      <Divider />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  btn: {
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
  },
});
