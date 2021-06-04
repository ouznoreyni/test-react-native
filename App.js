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
import AuthContext from './auth/context';
import storageService from './auth/storageService';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import navigationTheme from './navigation/navigationTheme';
import {navigationRef} from './navigation/rootNavigation';
import store from './store/configureStore';

const App: () => Node = () => {
  const [user, setUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
