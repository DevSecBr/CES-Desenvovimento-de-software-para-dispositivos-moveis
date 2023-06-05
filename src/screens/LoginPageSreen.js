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

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <LoginForm navigation={navigation}/>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
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
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    fontSize: 16,
    color: '#4834DF',
    textDecorationLine: 'underline',
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
