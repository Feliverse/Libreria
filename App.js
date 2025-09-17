import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import Icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  source={{ uri: "https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt8e7b73c3c4bf2f90/657ed8a9cd72b1e4fb2c1ccf/game_features_2.webp?" }} 
      style={{ 
        width: 400, 
        height: 400,
        borderRadius: 40,
        }} />
      <Text>Hola Mundo!</Text>
      <Button title="Press me" onPress={() => alert('Button pressed!')} />
      <TouchableHighlight onPress={() => alert('Image pressed!')}>
        <Image source={Icon} style={{ width: 100, height: 100 }} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfc7c7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
