import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [toggleCount, setToggleCount] = React.useState(0);
  return (
    <View style={styles.container}>
      {!isVisible && (
        <Text style={styles.txt}>
          I am a Toggle able Text. Try Toggling me.
        </Text>
      )}
      <Button
        title={isVisible ? 'Show Text' : 'Hide Text'}
        onPress={() => {
          setIsVisible(!isVisible);
          setToggleCount(toggleCount + 1);
        }}
      />
      <Text style={styles.heading}>Toggle Logs: </Text>
      <Text style={styles.txt}>Toggle Count: {toggleCount}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff7e6',
  },
  txt: {
    fontSize: 20,
    color: 'red',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    color: 'green',
    padding: 10,
    fontWeight: 'bold',
  },

});
