/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/fortmapa.jpg")} resizeMode="cover" style={styles.background}>
      <Image source={require("./assets/tralalilouuu.jpg")}  resizeMode="cover" style={styles.Image}></Image>
      <Text>milo</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100',
    height: '100',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '100',
    height: '100',
   },
    container: {
      width: 100,
      height: 100,
      borderRadius: 50, 
      overflow: 'hidden',
  }
})*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/fortmapa.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.perfilContainer}>
          <Image
            source={require("./assets/tralalilouuu.jpg")}
            resizeMode="cover"
            style={styles.perfil}
          />
        </View>
        <Text style={styles.text}>Milo</Text>
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
  perfilContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20,
  },
  perfil: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

