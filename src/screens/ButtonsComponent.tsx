import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/IconButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const ButtonsComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <IconButton
                    icon={
                    <MaterialCommunityIcons 
                        name="image-outline" 
                        size={24} 
                        color="green" 
                    />}
                    text="Create Image"
                    onPress={() => console.log("Home Pressed")}
                />
                <IconButton
                    icon={
                    <MaterialCommunityIcons 
                        name="chart-box-outline" 
                        size={24} 
                        color="blue"
                    />}
                    text="Analyze Data"
                    onPress={() => console.log("Home Pressed")}
                />
            </View>
            <View style={styles.btnContainer}>
                <IconButton
                    icon={
                        <SimpleLineIcons
                            name="graduation"
                            size={24}
                            color="blue"
                        />
                    }
                    text="Get advice"
                    onPress={() => console.log("Home Pressed")}
                />
                <IconButton
                    text="More"
                    onPress={() => console.log("Home Pressed")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        padding: 8,
    },
    btnContainer: {
        flexDirection: "row",
        margin: 4,
    }
});

export default ButtonsComponent;