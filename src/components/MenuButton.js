import React from 'react';
import {TouchableOpacity} from 'react-native';
const MenuButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="bars"
          style={{color: 'white', padding: 10, marginLeft: 10, fontSize: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
