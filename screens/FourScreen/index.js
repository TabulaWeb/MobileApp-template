import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const FourScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Контент четвертого экрана</Text>
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
