import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";


export default function ServiceDetails() {
    const { title, description } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Serviço</Text>
            <Text style={styles.description}>Titulo: {title}</Text>
            <Text style={styles.description}>Descrição: {description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0077b6',
    },
    description: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
});