import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ProviderScreen() {
  const router = useRouter();

  // Mock de serviços em andamento
  const [ongoingServices, setOngoingServices] = useState([
    { id: 1, title: 'Conserto de Ar Condicionado', description: 'Cliente informou que o aparelho não arma.' },
    { id: 2, title: 'Limpeza de Caixa D’Água', description: 'Mal fluxo de agua na casa.' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços aceitos</Text>
      <FlatList
        data={ongoingServices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() =>
            router.push({
              pathname: `/services/${item.id}`,
              params: {
                title: item.title,
                description: item.description,

              }
            })}>
            <Card.Content>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0077b6',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
