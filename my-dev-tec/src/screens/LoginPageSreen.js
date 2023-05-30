import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../components/LoginFormContent';

export default function LoginPage() {
  const navigation = useNavigation();

  const handleGoBackToMain = () => {
    navigation.navigate("Splash");
  };  

  const handleGoToRegister = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <LoginForm navigation={navigation}/>      
      <TouchableOpacity onPress={handleGoToRegister} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Cadastre-se</Text>
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
    top: 40, //  botão mais abaixo
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
  registerButton: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
  },
  registerButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
