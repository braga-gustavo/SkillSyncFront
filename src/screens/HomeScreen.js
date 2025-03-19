// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getServiceRequests } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await getServiceRequests();
      setRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('ServiceRequest', { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
