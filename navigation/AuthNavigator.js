import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{headerTitle: 'Creer un compte'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
