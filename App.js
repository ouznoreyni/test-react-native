/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AuthContext from './src/auth/context';
import storageService from './src/auth/storageService';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import {navigationRef} from './src/navigation/rootNavigation';
import store from './src/store/configureStore';

const App: () => Node = () => {
  const [user, setUser] = useState(false);

  const restoreUser = async () => {
    const user = await storageService.getData();
    if (user) setUser(user);
  };

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
