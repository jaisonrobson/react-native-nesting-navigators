import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Esta e a tela inicial</Text>
            <Button
                title="Sobre"
                onPress={() => navigation.navigate("About")}
            />
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

export default Home;