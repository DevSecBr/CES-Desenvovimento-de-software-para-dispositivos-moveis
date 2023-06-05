import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function MyEventDetailsPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const event = route.params?.event;

  
  const [location, setLocation] = useState(event.location);
  const [date, setDate] = useState(event.date);
  const [time, setTime] = useState(event.time);
  const [creator, setCreator] = useState(event.creator);

  const handleSave = () => {
    
  };

  const handleDelete = () => {
    
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>

      <Text style={styles.inputLabel}>Local:</Text>
      <TextInput 
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Text style={styles.inputLabel}>Data:</Text>
      <TextInput 
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <Text style={styles.inputLabel}>Hora:</Text>
      <TextInput 
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />     

      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Excluir evento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4834DF',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#4834DF',
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    color: '#4834DF',
    borderWidth: 1,
    borderColor: '#4834DF',
    borderRadius: 10,
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#4834DF',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#4834DF',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
