import React, { useContext } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TextContext from '../context/TextContext';

const MyTextInput = ({ placeholder, label, name, setName, setNameError, KEY }) => {
    const {
        focusedInput,
        setFocusedInput,
        handleTextInput,
    } = useContext(TextContext);
    return (
        // text input
        <View>
            <TextInput
                style={[
                    styles.input,
                    focusedInput === label && styles.inputFocused,
                ]}
                placeholder={placeholder}
                placeholderTextColor="blue"
                value={name}
                onChangeText={input => {
                    handleTextInput(
                        input,
                        setName,
                        setNameError,
                        KEY,
                    );
                }}
                onFocus={() => {
                    setFocusedInput(label);
                }}
                onBlur={() => {
                    setFocusedInput('');
                }}
            />
        </View>
    );
};

export default MyTextInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
        color: 'blue',
    },
    inputFocused: {
        borderColor: 'blue',
        borderWidth: 2,
    },
});