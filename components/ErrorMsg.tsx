import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import TextContext from "../context/TextContext";

const ErrorMsg = ({nameError}) => {
    return (
        <View>
            {nameError && (
                <Text style={styles.errorText}>
                    {nameError}
                </Text>
            )}
        </View>
    );
};

export default ErrorMsg;

const styles = StyleSheet.create({
    errorText: { 
        color: 'red', 
        fontSize: 18, 
        marginVertical: 10 
    },
});