import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchComponent = () => {
    const [searchText, setSearchText] = React.useState("");
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={"Ask anything"}
                style={{
                    flex: 5,
                    // paddingHorizontal: 16,
                    // paddingVertical: 8,
                    // backgroundColor: "red",
                    fontSize: 18,
                    // fontWeight: "500",
                    marginHorizontal: 14,
                    color: "black",
                }}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <View>
                <TouchableOpacity>
                    <AntDesign
                        name="arrowup"
                        size={24}
                        color="white"
                        style={{
                            backgroundColor: "black",
                            padding: 8,
                            borderRadius: 100,
                            marginHorizontal: 4,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        width: "95%",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginVertical: 8,
        // marginHorizontal: 18,
        padding: 4,
        borderRadius: 100,

    }
});

export default SearchComponent;