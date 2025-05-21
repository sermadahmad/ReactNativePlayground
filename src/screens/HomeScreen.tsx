import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeComponent from './HomeComponent';
import SearchComponent from './SearchComponent';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeComponent />
            <SearchComponent />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;