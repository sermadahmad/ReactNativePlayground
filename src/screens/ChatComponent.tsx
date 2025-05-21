import React, { useContext, useRef } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ChatContext } from "../Contexts/ChatContext";

const ChatComponent = () => {
    const { responses, prompts } = useContext(ChatContext);
    const flatListRef = useRef<FlatList>(null);

    // Interleave prompts and responses as separate items
    const data: { key: string; type: "prompt" | "response"; text: string }[] = [];
    prompts.forEach((prompt, idx) => {
        data.push({ key: `prompt-${idx}`, type: "prompt", text: prompt });
        if (responses[idx]) {
            data.push({ key: `response-${idx}`, type: "response", text: responses[idx] });
        }
    });

    const renderItem = ({ item, index }: any) => {
        if (item.type === "prompt") {
            return (
                <View style={[styles.card, styles.promptCard]}>
                    <Text style={styles.promptText}>{item.text}</Text>
                </View>
            );
        } else {
            // If this is the last item, scroll to end when it lays out
            const isLast = index === data.length - 1;
            return (
                <View
                    style={[styles.responseCard]}
                    onLayout={isLast ? () => flatListRef.current?.scrollToEnd({ animated: true }) : undefined}
                >
                    <Text style={styles.responseText}>{item.text}</Text>
                </View>
            );
        }
    };

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            contentContainerStyle={{ padding: 8 }}
            style={{ marginBottom: 70 }}

        />
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 12,
        marginVertical: 4,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
    },
    promptCard: {
        backgroundColor: "lightgray",
        alignSelf: "flex-end",
        width: "80%",
        marginLeft: "20%",
        marginVertical: 8,
    },
    responseCard: {
        alignSelf: "flex-start",
        width: "100%",
        marginVertical: 8,
        padding: 4,
    },
    promptText: {
        color: "black",
        fontSize: 16,
    },
    responseText: {
        color: "#333",
        fontSize: 16,
    },
});

export default ChatComponent;