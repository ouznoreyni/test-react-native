import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import colors from '../config/colors';
import ListUserDetailsScreen from '../screens/ListUserDetailsScreen';
import ListUsersScreen from '../screens/ListUsersScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedUsersNavigator = ({navigation}) => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: {backgroundColor: colors.blueDark},
    }}>
    <Stack.Screen
      name={routes.USERS_LIST}
      options={{
        headerTitle: 'Liste des utilisateurs',
        headerTitleStyle: {color: colors.light},
        headerLeft: () => (
          <CustomHeader navigation={navigation} iconColor={colors.light} />
        ),
      }}
      component={ListUsersScreen}
    />

    <Stack.Screen
      name={routes.USER_DETAILS}
      component={ListUserDetailsScreen}
      options={{
        headerTitle: "Information d'un utilisateur",
        headerTitleStyle: {color: colors.light},
        headerTintColor: colors.light,
      }}
    />
  </Stack.Navigator>
);

export default FeedUsersNavigator;
