import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const SingUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Контет экрана регистрации</Text>
      <Pressable onPress={() => console.log('Click!')}>
        <Text>Войти</Text>
      </Pressable>
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
