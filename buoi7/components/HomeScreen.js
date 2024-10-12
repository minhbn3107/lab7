import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {useState} from 'react';

export default function HomeScreen({ navigation, setName }) {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ width: '80%' }} source={require('../assets/note.png')} />
      <Text style={styles.header}>Manage Your Task</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ display: 'absolute', left: 40 }}
          source={require('../assets/mail.png')}
        />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholder="Enter your name"
        />
      </View>
      <Pressable onPress={() => {
        setName(text)
        navigation.navigate('TodoList')}}>
        <View style={styles.button}>
          <Text style={{ color: '#fff' }}>Get Started ➡</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    color: '#8353E2',
    fontSize: 20,
    paddingHorizontal: 70,
    textAlign: 'center',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginVertical: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 60,
    borderRadius: 10,
    placeholderTextColor: '#8a8a8a',
    marginVertical: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#00BDD6',
    width: 150,
    height: 30,
    textAlign: 'center',
  },
});
