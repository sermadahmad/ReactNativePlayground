import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonsComponent from './ButtonsComponent';
const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What can I help with?</Text>
    <ButtonsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    padding: 8,

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeComponent;