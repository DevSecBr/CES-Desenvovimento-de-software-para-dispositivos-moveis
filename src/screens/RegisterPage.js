import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../components/RegisterForm';


export default function RegisterPage() {
  const navigation = useNavigation();

  const handleGoBackToMain = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro</Text>
      <RegisterForm />      
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4834DF',
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
  mainMenuButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 5,
  },
  mainMenuButtonText: {
    fontSize: 18,
    color: '#F2F2F2',
  },
});
