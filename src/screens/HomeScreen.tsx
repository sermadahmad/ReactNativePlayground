import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeComponent from './HomeComponent';
import SearchComponent from './SearchComponent';
import ChatComponent from './ChatComponent';
import { ChatContext } from '../Contexts/ChatContext';
import { useContext } from 'react';

const HomeScreen = () => {

    const { responses, prompts } = useContext(ChatContext);

    return (
        <View style={styles.container}>
            {
                responses.length <= 0 && prompts.length <= 0 
                ? (<HomeComponent />) 
                : (<ChatComponent />)
            }
            <SearchComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;