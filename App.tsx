// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import React from 'react';
// import SettingsScreen from './screens/SettingsScreen';
// import HomeScreen from './screens/HomeScreen';
// import vibrate from './functions/vibrate';

// const App = () => {
//   // return (
//   //   <View>
//   //     <SettingsScreen />
//   //   </View>
//   // );

//   // return (
//   //   <View>
//   //     <HomeScreen />
//   //   </View>
//   // );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.btn} onPress={vibrate}>
//         <Text style={styles.txt}>Click me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   txt: {
//     color: 'white',
//   },
// });
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import KeyEvent from 'react-native-keyevent';

const App = () => {
  useEffect(() => {
    console.log('KeyEvent listener setup');  // Debugging message

    KeyEvent.onKeyDownListener((keyEvent: { keyCode: number }) => {
      console.log('Key Pressed:', keyEvent.keyCode); // Log key event

      if (keyEvent.keyCode === 24) {
        console.log('Volume Up Pressed');
      } else if (keyEvent.keyCode === 25) {
        console.log('Volume Down Pressed');
      } else {
        console.log('Other key pressed:', keyEvent.keyCode);  // Log other keys
      }
    });

    // Cleanup the listener on unmount
    return () => {
      console.log('Removing KeyEvent listener');
      KeyEvent.removeKeyDownListener();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Press the volume buttons to see the logs in your console.</Text>
      <Button onPress={() => console.log('Button Pressed')} title="Press Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
