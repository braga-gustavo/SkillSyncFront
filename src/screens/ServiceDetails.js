import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";


export default function ServiceDetails() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Serviço</Text>
            <Text style={styles.description}>Serviço ID: {id}</Text>
            <Text style={styles.description}>Mais informações em breve...</Text>
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