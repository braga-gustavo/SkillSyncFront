import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FAB, Card } from 'react-native-paper';
// import { getServiceRequests } from '../services/api';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();


  // Data Mocking
  const [requests, setRequests] = useState([
    {id: 1, title: 'Air conditioning fix', description: 'Quick and eficient service'},
    {id: 2, title: 'Water tank cleaning', description: 'Maitenece and cleaning'},
    {id: 3, title: 'Electrical wiring change', description: 'Residencial maitenence'},
  ])

 

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
              <Text style={styles.title}>{item.title} </Text>
              <Text style={styles.description}>{item.description}</Text>
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
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007b6',

  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ea',
  },
});
