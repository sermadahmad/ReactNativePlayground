import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const getRandomColor = () => {
  const getRandomHex = () => Math.floor(Math.random() * 16).toString(16);
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += getRandomHex();
  }
  return color;
}

const App = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [bgclr, setBgclr] = React.useState('lightblue');

  if (isChecked) {
    setTimeout(() => {
      setBgclr(getRandomColor())
    }, 300)
  }
  
  return (
    <View style={[styles.container, {backgroundColor: bgclr}]}>
      <View>
        <Button title="Change Color" onPress={() => setBgclr(getRandomColor())} />
        <View style={styles.checkbox}>
          <BouncyCheckbox 
            fillColor='firebrick'
            isChecked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            textComponent={
              <Text style={{padding:10, fontWeight:'bold' }}>{
                isChecked ? 'Turn off Disco Mode' : 'Turn on Disco Mode'
              }</Text>
            }
          />
        </View>
      </View>
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
  checkbox: {
    
  },
});
