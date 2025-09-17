import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import Icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      
      <TouchableHighlight onPress={() => alert('Image pressed!')}>
        <Image source={Icon} underlayColor="#a30e0eff"
          style={{ 
            width: 300, 
            height: 300,
            borderRadius: 300 / 2,
          }} />
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
