import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const FourScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Перейти</Text>
      </Pressable>
    </View>
  );
};

export default FourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
