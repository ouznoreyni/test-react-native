import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateUserScreen from '../screens/CreateUserScreen';
import FeedUsersNavigator from './FeedUsersNavigator';
import routes from './routes';

const Drawer = createDrawerNavigator();

const AppDrawerUser = () => {
  return (
    <Drawer.Navigator initialRouteName={routes.USERS_LIST}>
      <Drawer.Screen
        name={routes.USERS_LIST}
        component={FeedUsersNavigator}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon name="users" style={{color: tintColor}} />
          ),
          drawerLabel: 'Liste Utilisateurs',
        }}
      />
      <Drawer.Screen
        name={routes.USER_CREATE}
        component={CreateUserScreen}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon name="user-plus" style={{color: tintColor}} />
          ),
          drawerLabel: 'AJouter un Utilisateur',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerUser;
