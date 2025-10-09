import { StyleSheet, Text, View } from 'react-native';
export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>BEM VINDO!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    titulo: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:
            'center'
    }
});