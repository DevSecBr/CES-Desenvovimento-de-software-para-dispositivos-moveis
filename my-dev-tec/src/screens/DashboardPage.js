import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DashboardPage() {
  const navigation = useNavigation();

  const handleGoBackToMain = () => {
    navigation.navigate("Splash");
  };

  const handleViewPartners = () => {
    navigation.navigate('CompaniesList'); // Substitua 'PartnersList' pelo nome da tela de lista de parceiros no seu aplicativo
  };


  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleViewEvents = () => {
    navigation.navigate('EventsList');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Dashboard</Text>
      {/* Conteúdo do Feed que será desenvolvido */}
      <Text style={styles.content}>Bem-vindo ao Dashboard!</Text>
      <TouchableOpacity onPress={handleViewEvents} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Ver eventos</Text>
      </TouchableOpacity>      
      <TouchableOpacity onPress={handleViewPartners} style={styles.viewEventsButton}>
        <Text style={styles.viewEventsButtonText}>Ver parceiros</Text>
      </TouchableOpacity>

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
  viewEventsButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewEventsButton: {
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#4834DF',
    borderRadius: 20,
  },
  viewEventsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  

});