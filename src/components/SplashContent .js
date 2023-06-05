import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import logo from '../../assets/Logo.png'


export default function SplashContent() {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login");
    console.log("Usuario redirecionado para a tela de login");
  };

  return (
    <View style={styles.content}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity onPress={goLogin}>
        <Text style={styles.title}>My Dev Tec</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4834DF', // Cor De dominio de negocios da aplicação
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'cover', // Altere para 'cover' para preencher a área do círculo
    borderRadius: 75, // Metade da largura e altura para criar um círculo perfeito
    borderWidth: 3, // Largura da borda, opcional
    borderColor: '#4834DF', // Cor da borda, opcional
    overflow: 'hidden', // Para garantir que a imagem não ultrapasse o borderRadius
  },
});
