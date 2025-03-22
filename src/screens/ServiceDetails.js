import React from "react";
import { View, Text, StyleSheet, StatusBar  } from 'react-native';
import { Card } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";


export default function ServiceDetails() {
    const { title, description } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" translucent={true} />
            <Card style={styles.card} onPress={() =>
                router.push({
                    pathname: `/services/${item.id}`,
                    params: {
                        title: item.title,
                        description: item.description,

                    }
                })}>
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