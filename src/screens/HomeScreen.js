import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FAB, Card } from 'react-native-paper';
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

    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.container}>

        <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" translucent={true} />
        <Text style={styles.appTitle}>Skill Sync</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/services')}>
            <Text style={styles.buttonText}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/provider')}>
            <Text style={styles.buttonText}>Provider</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView >

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
    height: '10%'

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
    marginTop: '20%',
    padding: 10,
    background: 'rgb(2, 0, 36)',
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
})
