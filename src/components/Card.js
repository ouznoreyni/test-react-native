import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../config/colors';
const Card = ({user, imageUrl, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          resizeMode="contain"
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {user.first_name} {user.last_name}
          </Text>
          <Text style={styles.email} numberOfLines={2}>
            {user.email}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  email: {
    color: colors.blueDark,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 7,
    color: colors.blueDark,
  },
});

export default Card;
