import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';

const CustomHeader = ({navigation, iconColor = colors.bluePrimary}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="bars"
        size={30}
        color={iconColor}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 20,
  },
});

export default CustomHeader;
