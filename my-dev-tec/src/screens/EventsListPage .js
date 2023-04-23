import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventsListPage() {
  const navigation = useNavigation();

  const handleGoBackToMain = () => {
    navigation.navigate("Dashboard");
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  // Adicione a lógica para listar, filtrar, pesquisar e ordenar eventos aqui

  // Adicione a lógica para visualizar detalhes, editar e excluir eventos aqui

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Lista de Eventos</Text>
      {/* Conteúdo da lista de eventos que será desenvolvido */}
      <Text style={styles.content}>Bem-vindo à lista de eventos!</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
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
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4834DF',
  },
  logoutButton: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
