import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyEventsListPage() {
  const navigation = useNavigation();

  const handleGoToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleEventClick = (event) => {
    navigation.navigate('MyEventDetails', { event });
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const staticEvents = [
      { id: 1, name: 'Evento 1', location: 'Local 1', date: '2023-06-05', time: '10:00', creator: 'Usuário 1' },
      { id: 2, name: 'Evento 2', location: 'Local 2', date: '2023-06-06', time: '14:30', creator: 'Usuário 2' },
      // Adicione mais eventos para teste
      { id: 3, name: 'Evento 3', location: 'Local 3', date: '2023-06-07', time: '16:00', creator: 'Usuário 3' },
      { id: 4, name: 'Evento 4', location: 'Local 4', date: '2023-06-08', time: '18:30', creator: 'Usuário 4' },
      // ...
    ];
    setEvents(staticEvents);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem} onPress={() => handleEventClick(item)}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>Local: {item.location}</Text>
      <Text style={styles.eventDetails}>Data: {item.date} - Hora: {item.time}</Text>
      <Text style={styles.eventDetails}>Criado por: {item.creator}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista dos meus Eventos</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <TouchableOpacity onPress={handleGoToDashboard} style={styles.backButton}>
        <Text style={styles.backButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  backButton: {
    marginBottom: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4834DF',
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  eventItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4834DF',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 14,
    color: '#4834DF',
  },
});
