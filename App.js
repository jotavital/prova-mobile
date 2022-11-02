import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";

export default function App() {
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [field3, setField3] = useState("");

    const handleNumericField = (value) => {
        return value.replace(/[^0-9]/g, "");
    };

    const handlePrintValue = (value) => {
        return value != "" ? value : "Sem informação";
    };

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Prova de Mobile</Text>
            <Input label="Campo 1" callback={setField1} value={field1} />
            <Input
                label="Campo 2"
                callback={(value) => setField2(handleNumericField(value))}
                keyboardType="numeric"
                value={field2}
            />
            <Input
                label="Campo 3"
                callback={(value) => setField3(handleNumericField(value))}
                value={field3}
                keyboardType="numeric"
            />

            <Text style={styles.h2}>Campo 1: {handlePrintValue(field1)}</Text>
            <Text style={styles.h2}>Campo 2: {handlePrintValue(field2)}</Text>
            <Text style={styles.h2}>Campo 3: {handlePrintValue(field3)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    h1: {
        marginBottom: 30,
        fontSize: 30,
    },
    h2: {
        marginBottom: 30,
        fontSize: 20,
    },
});
