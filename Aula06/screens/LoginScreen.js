import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const handleLogin = () => {
        if (!email.includes('@')) {
            setErro('Digite um e-mail válido');
            return;
        }
        if (senha.length < 6) {
            setErro('A senha deve ter no mínimo 6 caracteres');
            return;
        }
        setErro('');
        navigation.navigate('Welcome');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            {erro ? <Text style={styles.erro}>{erro}</Text> : null}
            <Button title="Entrar" onPress={handleLogin} />
            <View style={{ height: 8 }} />
            <Button title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        width: '100%', 
        justifyContent: 'center', 
        padding: 20,
        textAlign: 'center'
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 16,
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff'
    },
    erro: { 
        color: '#ff3333',
        marginBottom: 16,
        fontSize: 14,
        alignSelf: 'flex-start'
    }
});