import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Descrição pendente de processo de login bem-sucedido
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Navegue para a DashboardPage após o login bem-sucedido
    if (isLoggedIn) {
      navigation.navigate('Dashboard');
    }
  }, [isLoggedIn, navigation]);

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#4834DF',
    borderRadius: 80,
    alignItems: 'center',
    padding: 10,
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
