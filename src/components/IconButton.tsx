import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconButtonProps {
    icon?: React.ReactNode;
    text: string;
    onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon}
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 100,
        marginVertical: 4,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 4,
    },
    buttonText: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: '500',
    },
});

export default IconButton;