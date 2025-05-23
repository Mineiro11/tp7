import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');

  const manejarContacto = () => {
    Alert.alert('Mensaje enviado', mensaje || 'No escribiste nada');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/fortmapa.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.card}>
          <View style={styles.perfilContainer}>
            <Image
              source={require("./assets/tralalilouuu.jpg")}
              resizeMode="cover"
              style={styles.perfil}
            />
          </View>
          <Text style={styles.text}>Milewko</Text>
          <Text style={styles.text}>Desarrolladores de Frontend con experiencia.</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Escribe un mensaje"
            value={mensaje}
            onChangeText={setMensaje}
          />

          <TouchableOpacity style={styles.boton} onPress={manejarContacto}>
            <Text style={styles.botonTexto}>Contactar</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>

    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: '#1a1110',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  boton: {
    height: 40,
    width: 250,
    backgroundColor: '#008000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  perfilContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#1a1110',
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 20,
  },
  perfil: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: '#1a1110',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});
