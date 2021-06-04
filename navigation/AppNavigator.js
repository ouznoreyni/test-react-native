import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../config/colors';
import DashboardScreen from '../screens/DashboardScreen';
import PdfViewer from '../screens/PdfViewer';
import ReduxScreen from '../screens/ReduxScreen';
import AppDrawerUser from './AppDrawerUser';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.blueDark},
      }}>
      <Tab.Screen
        name={routes.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="th-large" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.USERS_LIST}
        component={AppDrawerUser}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.REDUX_SCREEN}
        component={ReduxScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="redux" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SCREEN_PDF}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-pdf-o" size={size} color={color} />
          ),
        }}
        component={PdfViewer}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
