import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { FAB, Card, Text } from 'react-native-paper';
import { getServiceRequests } from '../services/api';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // fetchRequests();
  }, []);

  // const fetchRequests = async () => {
  //   try {
  //     const response = await getServiceRequests();
  //     setRequests(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => router.push(`/service/${item.id}`)}>
            <Card.Content>
              <Text variant="titleLarge">{item.title}</Text>
              <Text variant="bodyMedium">{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Adicionar serviço')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  card: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ea',
  },
});
