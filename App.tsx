import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyHeader from './components/MyHeader';
import FullName from './components/FullName';
import MyTextInput from './components/MyTextInput';
import ErrorMsg from './components/ErrorMsg';
import Count from './components/Count';
import TextContext from './context/TextContext';

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
    <TextContext.Provider value={{
      firstName,
      lastName,
      focusedInput,
      setFocusedInput,
      handleTextInput,
    }}>
      <View style={styles.container}>
        <MyHeader />
        <MyTextInput
          placeholder='Enter First Name ...'
          label='firstName'
          name={firstName}
          setName={setFirstName}
          setNameError={setFirstNameError}
          KEY={FIRST_NAME_KEY}
        />
        <ErrorMsg
          nameError={firstNameError}
        />
        <Count
          name={firstName}
          setName={setFirstName}
        />
        <MyTextInput
          placeholder="Enter Last Name ..."
          label="lastName"
          name={lastName}
          setName={setLastName}
          setNameError={setLastNameError}
          KEY={LAST_NAME_KEY}
        />
        <ErrorMsg nameError={lastNameError} />
        <Count name={lastName} setName={setLastName} />
        <FullName />
      </View>
    </TextContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
