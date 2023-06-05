import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateEventPage() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleCreateEvent = () => {
    
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Criar Evento</Text>

      <Text style={styles.inputLabel}>Nome do Evento:</Text>
      <TextInput 
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

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

      <TouchableOpacity onPress={handleCreateEvent} style={styles.createButton}>
        <Text style={styles.buttonText}>Criar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    alignItems: 'center',
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
    color: '#4834DF',
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    color: '#4834DF',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,
  },
  input: {
    width: '80%',
    fontSize: 16,
    color: '#4834DF',
    borderWidth: 1,
    borderColor: '#4834DF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#4834DF',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
