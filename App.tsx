import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { mycolors } from './src/style/colores';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value ={theme}>
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <Text style={theme === 'light' ? estiloLetra.ejemplo : [estiloLetra.ejemplo, {color: mycolors.white}]}>aprendiendo</Text>
      <StatusBar style="auto" />
      <Switch value ={theme === 'light'} onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />

      <MyKeyboard />
      
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mycolors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const estiloLetra = StyleSheet.create({
  ejemplo: {
    color: mycolors.black
  }
})
