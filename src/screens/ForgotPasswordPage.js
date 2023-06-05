import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // B-E
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Recuperação de senha</Text>
      <Text style={styles.inputLabel}>Email:</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={handleResetPassword} style={styles.resetButton}>
        <Text style={styles.buttonText}>Resetar senha</Text>
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
    marginBottom: 30,
    color: '#4834DF',
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
    marginBottom: 20,
  },
  resetButton: {
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
