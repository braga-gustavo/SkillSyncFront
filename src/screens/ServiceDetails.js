import React from "react";
import { View, Text, StyleSheet, StatusBar  } from 'react-native';
import { Card } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";


export default function ServiceDetails() {
    const { title, description } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="backgroundColor: 'rgba(55, 112, 197, 0.97)'" translucent={true} />
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title}>Detalhes do Serviço</Text>
                    <Text style={styles.description}>Titulo: {title}</Text>
                    <Text style={styles.description}>Descrição: {description}</Text>
                </Card.Content>
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(55, 112, 197, 0.97)',
        flex: 1,
        padding: 20,
    },
    title: {
       fontFamily: 'Montserrat_700Bold',    
        fontSize: 24,
        color: '#0077b6',
    },
    description: {
        fontFamily: 'Montserrat_400Regular',    
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
});