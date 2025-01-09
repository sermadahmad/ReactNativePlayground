import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import vibrate from './functions/vibrate';
import KeepAwake from 'react-native-keep-awake';

const App = () => {
  // return (
  //   <View>
  //     <SettingsScreen />
  //   </View>
  // );

  // return (
  //   <View>
  //     <HomeScreen />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <KeepAwake />
      <TouchableOpacity style={styles.btn} onPress={vibrate}>
        <Text style={styles.txt}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  txt: {
    color: 'white',
  },
});


