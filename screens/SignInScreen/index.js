import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const SingInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Контет экрана входа</Text>
      <Pressable onPress={() => console.log('Click!')}>
        <Text>Войти</Text>
      </Pressable>
    </View>
  );
};

export default SingInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
