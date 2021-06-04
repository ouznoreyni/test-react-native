import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 1,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
