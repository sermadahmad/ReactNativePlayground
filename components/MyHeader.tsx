import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyHeader = () => {
    return (
        <View>
            <Text style={styles.title}>Text Input Tracker</Text>
        </View>
    );
};

export default MyHeader;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
