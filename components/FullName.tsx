import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import TextContext from "../context/TextContext";

const FullName = () => {
    const {firstName, lastName} = useContext(TextContext);
    return (
        <View>
            <Text style={styles.nameText}>
                Full Name: {firstName} {lastName}
            </Text>
        </View>
    );
};

export default FullName;

const styles = StyleSheet.create({
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'green',
      },
});