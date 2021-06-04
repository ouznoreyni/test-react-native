import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../config/colors';
const ListUserDetailsScreen = ({route}) => {
  const user = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <Image
        style={styles.image}
        tint="light"
        resizeMode="cover"
        source={{
          uri: user.avatar,
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 500,
  },
  email: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
});
export default ListUserDetailsScreen;
