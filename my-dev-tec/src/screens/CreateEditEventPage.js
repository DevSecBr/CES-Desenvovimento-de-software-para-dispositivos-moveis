import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function CreateEditEventPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [participants, setParticipants] = useState('');

  const isEditing = route.params?.event;

  useEffect(() => {
    if (isEditing) {
      const { event } = route.params;
      setTitle(event.title);
      setDate(event.date);
      setTime(event.time);
      setLocation(event.location);
      setDescription(event.description);
      setParticipants(event.participants.join(', '));
    }
  }, [isEditing, route.params]);

  const handleSaveEvent = () => {
    if (title === '' || date === '' || time === '' || location === '' || description === '' || participants === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const event = {
      id: isEditing ? route.params.event.id : Date.now(),
      title,
      date,
      time,
      location,
      description,
      participants: participants.split(',').map((participant) => participant.trim()),
    };

    // Lógica para salvar o evento no banco de dados ou atualizar um evento existente [ Dessenvolvimento versão 1.1 ]

    Alert.alert(`Evento ${isEditing ? 'atualizado' : 'criado'} com sucesso!`);

    navigation.navigate('EventDetails', { event });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#4834DF" />
        </TouchableOpacity>
        <Text style={styles.title}>{isEditing ? 'Editar Evento' : 'Criar Evento'}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Digite o título do evento"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Digite a data do evento"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hora</Text>
          <TextInput
            style={styles.input}
            value={time}
            onChangeText={setTime}
            placeholder="Digite a hora do evento"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Local</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Digite o local do evento"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Digite a descrição do evento"
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Participantes (separados por vírgula)</Text>
          <TextInput
            style={styles.input}
            value={participants}
            onChangeText={setParticipants}
            placeholder="Digite os participantes do evento"
          />
        </View>

        <TouchableOpacity onPress={handleSaveEvent} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>{isEditing ? 'Atualizar' : 'Salvar'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4834DF',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#4834DF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
