import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavegationConteiner} from '@react-Navegation/native';
import {createNativeStackNavigator} from '@react-navegation/native-stack';

import Login from '../screens/login/Login'

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ois</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
