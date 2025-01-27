import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FIRST_NAME_KEY = '@firstName';
const LAST_NAME_KEY = '@lastName';

const App = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState('');
  const [focusedInput, setFocusedInput] = React.useState('');

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Error storing data', e);
    }
  };
  const loadData = async (
    key: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setter(value);
      }
    } catch (e) {
      console.log('Error loading data', e);
    }
  };

  const handleTextInput = (
    val: string,
    setVal: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    key: string,
  ) => {
    const capitalizedVal = val.replace(/\b\w/g, char => char.toUpperCase());
    setVal(capitalizedVal);
    storeData(key, capitalizedVal);
    if (val.length < 3) {
      setError('Text length should be at least 3 characters');
    } else {
      setError('');
    }
  };

  useEffect(() => {
    loadData(FIRST_NAME_KEY, setFirstName);
    loadData(LAST_NAME_KEY, setLastName);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Text Input Tracker</Text>
      </View>
      <View>
        <TextInput
          style={[
            styles.input,
            focusedInput === 'firstName' && styles.inputFocused,
          ]}
          placeholder="Enter First Name ..."
          placeholderTextColor="blue"
          value={firstName}
          onChangeText={input => {
            handleTextInput(
              input,
              setFirstName,
              setFirstNameError,
              FIRST_NAME_KEY,
            );
          }}
          onFocus={() => {
            setFocusedInput('firstName');
          }}
          onBlur={() => {
            setFocusedInput('');
          }}
        />
      </View>
      <View>
        {firstNameError && (
          <Text style={{color: 'red', fontSize: 18, marginVertical: 10}}>
            {firstNameError}
          </Text>
        )}
      </View>
      <View>
        <View>
          <Text style={styles.countText}>
            Length Count: {firstName.length} characters
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setFirstName('');
          }}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={[
            styles.input,
            focusedInput === 'lastName' && styles.inputFocused,
          ]}
          placeholder="Enter Last Name ..."
          placeholderTextColor="blue"
          value={lastName}
          onChangeText={input => {
            handleTextInput(
              input,
              setLastName,
              setLastNameError,
              LAST_NAME_KEY,
            );
          }}
          onFocus={() => {
            setFocusedInput('lastName');
          }}
          onBlur={() => {
            setFocusedInput('');
          }}
        />
      </View>
      <View>
        {lastNameError && (
          <Text style={{color: 'red', fontSize: 18, marginVertical: 10}}>
            {lastNameError}
          </Text>
        )}
      </View>
      <View>
        <View>
          <Text style={styles.countText}>
            Length Count: {lastName.length} characters
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setLastName('');
          }}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.nameText}>
          Full Name: {firstName} {lastName}
        </Text>
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
  countText: {
    fontSize: 18,
    marginVertical: 10,
  },
  inputFocused: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'green',
  },
});
