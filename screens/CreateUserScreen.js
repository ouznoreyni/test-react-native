import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import CustomHeader from '../components/CustomHeader';
import {ErrorMessage, Form, FormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';
import colors from '../config/colors';
import usersService from '../services/usersService';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  job: Yup.string().required().label('Job'),
});

const CreateUserScreen = ({navigation}) => {
  const [error, setError] = useState();

  const handleSubmit = async ({name, job}) => {
    if (name.length < 5 || job.length < 3) {
      console.log('incorrect');
    } else {
      try {
        const response = await usersService.create({name, job});
        console.log('user ', response);
      } catch (error) {}
    }
  };

  return (
    <>
      <CustomHeader navigation={navigation} iconColor={colors.bluePrimary} />

      <Screen style={styles.container}>
        <ActivityIndicator visible={true} />
        <View style={styles.brand}>
          <Image
            source={require('../assets/images/add_user.png')}
            style={styles.imageAddUser}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.createUserText}>Ajouter un utilisateur</Text>
          <Form
            initialValues={{name: '', job: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <ErrorMessage error={error} visible={error} />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="users"
              name="name"
              placeholder="Name"
              textContentType="name"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="institution"
              name="job"
              placeholder="your job"
              textContentType="jobTitle"
            />
            <SubmitButton title="ajouter" />
          </Form>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.blueDark,
    height: 50,
  },
  imageAddUser: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
  createUserText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
    color: colors.blueLight,
  },
});
export default CreateUserScreen;
