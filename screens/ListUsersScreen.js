import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Listuser from '../components/listuser';
import Screen from '../components/Screen';
import usersService from '../services/usersService';

const ListUsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    try {
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  }, [users]);

  loadUsers = async () => {
    if (!isLoaded) {
      const {data} = await usersService.getAll((page = 1));
      setUsers(data.data);
      setIsloaded(true);
      console.log('data ', data);
    }
  };

  return (
    <Screen style={styles.container}>
      <Listuser navigation={navigation} data={users} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListUsersScreen;
