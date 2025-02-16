import React, {useContext} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TextContext from "../context/TextContext";

const Count = ({name, setName}) => {
    return (
        <View>
            <View>
                <Text style={styles.countText}>
                    Length Count: {name.length} characters
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setName('');
                }}>
                <Text style={styles.clearBtn}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Count;

const styles = StyleSheet.create({
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
});