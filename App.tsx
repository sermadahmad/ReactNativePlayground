import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  // return (
  //   <View>
  //     <SettingsScreen />
  //   </View>
  // );
  return (
    <View>
      {/* <HomeScreen /> */}
    </View>
  );

  

  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity style={styles.btn} onPress={() => ('Hello World')}>
  //       <Text style={styles.txt}>Click me</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
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
