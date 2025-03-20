import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FAB, Card } from 'react-native-paper';
// import { getServiceRequests } from '../services/api';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();




  // useEffect(() => {
  //   fetchRequests();
  // }, []);

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
      <Text style={styles.appTitle}>Skill Sync</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/service')}>
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/service')}>
          <Text style={styles.buttonText}>Provider</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0077b6',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    height: '9%'

  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(0, 191, 255, 0.6)',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fffff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    marginTop: '35%',
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
