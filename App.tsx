import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [toggleCount, setToggleCount] = React.useState(0);
  const [toggleLogs, setToggleLogs] = React.useState<string[]>([]);

  const handleToggle = () => {
    const nextVisibility = isVisible;
    setToggleLogs([
      ...toggleLogs,
      `${
        nextVisibility ? 'Hide' : 'Displayed'
      } at ${new Date().toLocaleTimeString()}`,
    ]);
    setIsVisible(!nextVisibility);
    setToggleCount(toggleCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Toggle Text: </Text>
      
        <View style={{opacity: isVisible?1:0}}>
          <Text style={styles.txt}>I am a Toggle able Text.</Text>
          <Text style={styles.txt}>Try Toggling me.</Text>
        </View>
      
      <Button
        title={isVisible ? 'Hide Text' : 'Show Text'}
        onPress={handleToggle}
      />
      <Text style={styles.heading}>Toggle Logs: </Text>
      <Text style={styles.txt}>Toggle Count: {toggleCount}</Text>
      <Button title="Clear Logs" onPress={() => {
        setToggleLogs([]);
        setToggleCount(0);
      }} />
      <FlatList
        data={toggleLogs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.logtxt}>{item}</Text>}
      />
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
  logtxt: {
    fontSize: 18,
    color: 'black',
    padding: 6,
  },
});
