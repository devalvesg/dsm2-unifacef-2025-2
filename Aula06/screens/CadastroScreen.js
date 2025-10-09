import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    
    const [erros, setErros] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: ''
    });

    const validar = () => {
        const novosErros = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            confirmarSenha: ''
        };

        // Validação do nome
        if (nome.trim().length < 3) {
            novosErros.nome = 'Nome deve ter pelo menos 3 caracteres';
        }

        // Validação do email
        if (!email.includes('@')) {
            novosErros.email = 'Digite um e-mail válido';
        }

        // Validação do telefone (deve ter 11 dígitos - DDD + número)
        if (telefone.replace(/\D/g, '').length !== 11) {
            novosErros.telefone = 'Telefone deve ter 11 números (DDD + número)';
        }

        // Validação da senha
        if (senha.length < 6) {
            novosErros.senha = 'A senha deve ter no mínimo 6 caracteres';
        }

        // Validação da confirmação de senha
        if (senha !== confirmarSenha) {
            novosErros.confirmarSenha = 'As senhas não coincidem';
        }

        setErros(novosErros);
        return !Object.values(novosErros).some(erro => erro !== '');
    };

    const handleCadastro = () => {
        if (validar()) {
            navigation.navigate('Confirmacao', {
                dados: {
                    nome,
                    email,
                    telefone
                }
            });
        }
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            
            <TextInput
                style={[styles.input, erros.nome ? styles.inputError : null]}
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />
            {erros.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}

            <TextInput
                style={[styles.input, erros.email ? styles.inputError : null]}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            {erros.email ? <Text style={styles.erro}>{erros.email}</Text> : null}

            <TextInput
                style={[styles.input, erros.telefone ? styles.inputError : null]}
                placeholder="Telefone (com DDD)"
                keyboardType="numeric"
                value={telefone}
                onChangeText={setTelefone}
                maxLength={11}
            />
            {erros.telefone ? <Text style={styles.erro}>{erros.telefone}</Text> : null}

            <TextInput
                style={[styles.input, erros.senha ? styles.inputError : null]}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            {erros.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}

            <TextInput
                style={[styles.input, erros.confirmarSenha ? styles.inputError : null]}
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />
            {erros.confirmarSenha ? <Text style={styles.erro}>{erros.confirmarSenha}</Text> : null}

            <View style={styles.buttonContainer}>
                <Button title="Cadastrar" onPress={handleCadastro} />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center', 
        padding: 20,
        paddingBottom: 40
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
        color: '#333',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 8,
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff'
    },
    inputError: {
        borderColor: '#ff3333'
    },
    erro: { 
        color: '#ff3333',
        marginBottom: 16,
        fontSize: 14,
        alignSelf: 'flex-start',
        marginLeft: 4
    },
    buttonContainer: {
        marginTop: 16
    }
});