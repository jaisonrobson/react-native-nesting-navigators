import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = () => {
    return (
        <View style={styles.center}>
            <Text>tela Sobre</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default About;