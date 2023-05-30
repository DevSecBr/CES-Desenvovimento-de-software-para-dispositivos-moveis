import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterForm() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Implementação futura para o processo de cadastro
    setIsRegistered(true);
  };

  useEffect(() => {
    // Navegar para a LoginPage após o cadastro bem-sucedido
    if (isRegistered) {
      navigation.navigate('Login');
    }
  }, [isRegistered, navigation]);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
        value={name}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
