import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventsListPage() {
  const navigation = useNavigation();

  const handleGoBackToMain = () => {
    navigation.navigate('Dashboard');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Evento 1',
      date: '10/05/2023',
      time: '14:00',
      location: 'Local 1',
      description: 'Descrição do Evento 1',
      participants: ['Participante 1', 'Participante 2'],
    },
    {
      id: 2,
      title: 'Evento 2',
      date: '15/05/2023',
      time: '16:00',
      location: 'Local 2',
      description: 'Descrição do Evento 2',
      participants: ['Participante 3', 'Participante 4'],
    },
    // Adicionar mais eventos na lógica do banco
  ]);

  const handleEventPress = (event) => {
    navigation.navigate('EventDetails', { event });
  };

  const handleDeleteEvent = (event) => {
    Alert.alert(
      'Confirmação',
      `Deseja excluir o evento "${event.title}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => deleteEvent(event) },
      ],
      { cancelable: true }
    );
  };

  const deleteEvent = (event) => {
    // Lógica para excluir o evento do array "events" [ Desenvolvimento versão 1.1 ]
    const updatedEvents = events.filter((item) => item.id !== event.id);
    setEvents(updatedEvents);
  };

  const renderEventItem = ({ item }) => (
    <TouchableOpacity
      style={styles.eventItem}
      onPress={() => handleEventPress(item)}
      onLongPress={() => handleDeleteEvent(item)}
    >
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Lista de Eventos</Text>
      <View style={styles.eventListContainer}>
        <FlatList
          data={events}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.eventList}
        />
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4834DF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4834DF',
  },
  eventListContainer: {
    flex: 1,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4834DF',
  },
  eventDate: {
    fontSize: 16,
    color: '#4834DF',
  },
  logoutButton: {
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
