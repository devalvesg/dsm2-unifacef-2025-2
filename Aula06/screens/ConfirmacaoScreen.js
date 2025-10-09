import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ConfirmacaoScreen({ route }) {
    const { dados } = route.params;

    const formatTelefone = (tel) => {
        const cleaned = tel.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return tel;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Dados do Cadastro</Text>
            
            <View style={styles.field}>
                <Text style={styles.label}>Nome Completo:</Text>
                <Text style={styles.value}>{dados.nome}</Text>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>E-mail:</Text>
                <Text style={styles.value}>{dados.email}</Text>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>{formatTelefone(dados.telefone)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333'
    },
    field: {
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef'
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500'
    }
});