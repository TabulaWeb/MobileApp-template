import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const ThreeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Перейти</Text>
      </Pressable>
    </View>
  );
};

export default ThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
