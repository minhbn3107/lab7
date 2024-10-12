import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={(props) => (
            <HomeScreen {...props} setName={setName} />
          )}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/avatar.png')} />
                <View
                  style={{
                    paddingHorizontal: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.header}>Hi {name}</Text>
                  <Text style={styles.text}>Have a great day</Text>
                </View>
              </View>
            ),
            title: ''
          }}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/avatar.png')} />
                <View
                  style={{
                    paddingHorizontal: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.header}>Hi {name}</Text>
                  <Text style={styles.text}>Have a great day</Text>
                </View>
              </View>
            ),
            title: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 700,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 600,
  },
});
