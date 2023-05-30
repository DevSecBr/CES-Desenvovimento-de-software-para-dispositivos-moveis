// components/Background.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Background = ({children}) => {
  return (
    <LinearGradient
      colors={['#4834DF', '#8A74E8']} // Cores do gradiente
      style={styles.background}
    >
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;
