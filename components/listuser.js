import React from 'react';
import {FlatList} from 'react-native';
import routes from '../navigation/routes';
import Card from './Card';

const Listuser = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={user => user.id.toString()}
      renderItem={({item, index}) => {
        return (
          <Card
            key={index}
            user={item}
            imageUrl={item.avatar}
            thumbnailUrl={item.avatar}
            onPress={() => navigation.navigate(routes.USER_DETAILS, item)}
          />
        );
      }}
    />
  );
};

export default Listuser;
