import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.user}>Ruben Rodriguez</Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  content:{
    marginBottom:20,
  },
  welcome: {
    fontSize: 16,
    fontWeight: 800,
    color: '#000000',
  },
  user: {
    fontSize: 16,
    color: '#000000',
  },
});
