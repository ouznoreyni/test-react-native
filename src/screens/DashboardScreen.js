import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useAuth from '../auth/useAuth';
import Button from '../components/Button';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

const DashboardScreen = ({navigation}) => {
  const auth = useAuth();

  return (
    <Screen style={styles.container}>
      <View style={styles.brand}>
        <Image
          source={require('../assets/images/dashboard.png')}
          style={styles.imageLogin}
        />
      </View>
      <View style={styles.buttonsDashboard}>
        <Button
          title="Ecran lister les utilisateurs"
          color="blueDark"
          onPress={() => navigation.navigate(routes.USERS_LIST)}
        />
        <Button
          title="Ecran Creer utilisateur"
          onPress={() =>
            navigation.navigate(routes.USER_CREATE, {screen: routes.USERS_LIST})
          }
          color="blueDark"
        />
        <Button
          title="Ecran PDF"
          onPress={() => navigation.navigate(routes.SCREEN_PDF)}
          color="blueDark"
        />
        <Button
          title="Ecran Redux"
          onPress={() => navigation.navigate(routes.REDUX_SCREEN)}
          color="blueDark"
        />

        <Button
          title="deconnecter"
          onPress={() => {
            auth.logOut();
            navigation.navigate(routes.LOGIN);
          }}
          color="danger"
        />
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
  buttonsDashboard: {
    flex: 2,
    marginTop: 20,
  },
});

export default DashboardScreen;
