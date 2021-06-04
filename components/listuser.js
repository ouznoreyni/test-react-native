import React from 'react';
import {FlatList} from 'react-native';
import routes from '../navigation/routes';
import Card from './Card';

const Listuser = ({data, navigation}) => {
  const generateStr = () => Math.random().toString(36).slice(5);
  return (
    <FlatList
      data={data}
      keyExtractor={user => `${generateStr()}${user.id.toString()}`}
      renderItem={({item}) => (
        <Card
          user={item}
          imageUrl={item.avatar}
          thumbnailUrl={item.avatar}
          onPress={() => navigation.navigate(routes.USER_DETAILS, item)}
        />
      )}
    />
  );
};

export default Listuser;
