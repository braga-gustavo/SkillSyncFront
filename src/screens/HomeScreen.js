import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <StatusBar barStyle="dark-content" backgroundColor="rgba(55, 112, 197, 0.97)" />
      <Text style={styles.appTitle}>Skill Sync</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/services')}>
          <Text style={styles.buttonText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/provider')}>
          <Text style={styles.buttonText}>Prestador</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 40,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    marginTop: 40,
  },
  button: {
    width: '80%',
    backgroundColor: 'rgb(29, 71, 105)',
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 18,
    color: '#FFFFFF',

  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(55, 112, 197, 0.97)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 90,
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
})
