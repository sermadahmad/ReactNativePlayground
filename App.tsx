import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');

  const handleTextInput = (val: string) => {
    if (val.length < 3) {
      setError('Text length should not exceed 10 characters');
    } else {
      setError('');
      setText(val);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Text Input Tracker</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="blue"
          value={text}
          onChangeText={handleTextInput}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => setText('')}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      // error message
      <View>
        {error && (
          <Text style={{color: 'red', fontSize: 18, marginVertical: 10}}>
            {error}
          </Text>
        )}
      </View>
      <View>
        <Text style={styles.enteredTxt}>You entered: {text}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 10,
    color: 'blue',
  },
  clearBtn: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  enteredTxt: {
    fontSize: 18,
    marginVertical: 10,
  },
});
