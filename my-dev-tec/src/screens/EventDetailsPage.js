import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventDetailsPage() {
  const navigation = useNavigation();

  const handleGoBackToList = () => {
    navigation.navigate('EventsList');
  };

  const handleEditEvent = () => {
    navigation.navigate('CreateEditEvent', { event }); // Navega para a tela CreateEditEventPage com os dados do evento
  };

  const handleDeleteEvent = () => {
    // Adicionar a lógica para excluir o evento 
  };

  // Informações do evento (substituir com os dados reais do evento)
  const event = {
    title: 'Evento de Exemplo',
    date: '10 de maio de 2023',
    time: '14:00',
    location: 'Local do Evento',
    description: 'Descrição do evento',
    participants: ['Participante 1', 'Participante 2', 'Participante 3'],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToList} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.subtitle}>{event.date} às {event.time}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <Text style={styles.participantsTitle}>Participantes:</Text>
      {event.participants.map((participant, index) => (
        <Text key={index} style={styles.participant}>{participant}</Text>
      ))}
      <TouchableOpacity onPress={handleEditEvent} style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteEvent} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  backButtonText: {
    fontSize: 16,
    color: '#4834DF',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4834DF',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#4834DF',
  },
  location: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  participantsTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  participant: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  editButton: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  deleteButton: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  deleteButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
