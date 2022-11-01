import { Text, TextInput, View } from "react-native";

function Input({ label, callback, keyboardType = "default" }) {
    return (
        <View style={{ minWidth: "70%", marginBottom: 30 }}>
            <Text>{label ?? "Sem label"}</Text>
            <TextInput
                keyboardType={keyboardType}
                style={{ borderWidth: 1, borderColor: "#000" }}
                onChangeText={(value) => callback(value)}
            />
        </View>
    );
}

export default Input;
