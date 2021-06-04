import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Listuser from '../components/listuser';
import Screen from '../components/Screen';
import {fetchUsers} from '../store/usersSlice';

const ReduxScreen = ({navigation}) => {
  const usersState = useSelector(state => state.users);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    setUsers(usersState.users);
    console.log('state', usersState.users);
  }, [users, usersState.users]);

  return (
    <Screen>
      <View>
        <Text style={styles.brand}>Les donnees du redux</Text>
      </View>
      <View style={styles.listUsers}>
        <Listuser navigation={navigation} data={users} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  brand: {
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  listUsers: {},
});

export default ReduxScreen;
