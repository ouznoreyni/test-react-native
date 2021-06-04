import React, {useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import * as Yup from 'yup';
import storageService from '../auth/storageService';
import useAuth from '../auth/useAuth';
import {ErrorMessage, Form, FormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';
import colors from '../config/colors';
import authService from '../services/authService';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  passwordref: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const RegisterScreen = () => {
  const auth = useAuth();

  const [error, setError] = useState();
  const handleSubmit = async ({email, password, p}) => {
    try {
      const {data} = await authService.register({email, password});
      // storageService.storeData(data.token);
      auth.logIn(data.token);
      console.log(storageService.getData());
    } catch (error) {
      notify();
      console.log('erro', error);
    }
  };

  const notify = () => {
    Toast.show('Login ou mot de passe incorrect.', Toast.LONG, Toast.TOP, []);
    Alert.alert(
      'error',
      'login ou mot de pass incorrect,ou une erreur cote backend',
    );
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.brand}>
        <Image
          source={require('../assets/images/undraw_mobile_testing_reah.png')}
          style={styles.imageLogin}
        />
      </View>
      <View style={styles.formContainer}>
        <Form
          initialValues={{
            email: 'eve.holt@reqres.in',
            password: 'pistol',
            passwordref: 'pistol',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="envelope-o"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="password"
            secureTextEntry
            textContentType="password"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordref"
            placeholder="Password confirmation"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brand: {
    flex: 1,
  },
  imageLogin: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    marginTop: 10,
  },
  loginText: {
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  formContainer: {
    flex: 2,
    backgroundColor: colors.white,
    borderWidth: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default RegisterScreen;
