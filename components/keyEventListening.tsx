
// code for listening to volume up and down keys
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import KeyEvent from 'react-native-keyevent';
const App = () => {
  useEffect(() => {
    KeyEvent.onKeyDownListener((keyEvent: { keyCode: number }) => {
      if (keyEvent.keyCode === 24) {
        console.log('Volume Up Pressed');
      } else if (keyEvent.keyCode === 25) {
        console.log('Volume Down Pressed');
      }
    });
    return () => {
      KeyEvent.removeKeyDownListener();
    };
  }, []);
  return (
    <View>
      <Text>Press volume buttons to see logs.</Text>
    </View>
  );
};
export default App;
