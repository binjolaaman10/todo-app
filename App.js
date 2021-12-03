import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// import Tasks from './components/Tasks';
// import Input from './components/Input';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [tasks, setTasks] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const taskHandler = () => {
    if (enteredGoal === '')
      return;
    setTasks((currentState) => [...currentState,
    { value: enteredGoal, key: Math.random().toString() }]);
    setEnteredGoal('');
  };

  const removeGoal = (goalKey) => {
    setTasks((currentState) => {
      return (currentState.filter((task) => task.key !== goalKey));
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Tasks</Text>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            placeholder='Enter Task'
            value={enteredGoal}
            onChangeText={goalInputHandler}
          />
        </View>

        <View style={styles.button}>
          <Button title='ADD' color='#E69A8D' onPress={taskHandler} />
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={(item) =>
        (
          <TouchableOpacity activeOpacity={0.8} onPress={removeGoal.bind(this, item.item.key)}>
            <View style={styles.tasks}>
              <View style={styles.square}></View>
              <Text style={styles.text}>{item.item.value}</Text>
            </View>
          </TouchableOpacity>
        )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F4B8B',
  },
  header: {
    paddingTop: 48,
    paddingBottom: 39,
    fontSize: 24,
    left: 32,
    fontWeight: 'bold',
    color: '#E69A8D',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10
  },
  input: {
    borderWidth: 1,
    flex: 3,
    borderColor: '#E69A8D',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 14,
  },
  button: {
    flex: 1,
  },
  tasks: {
    borderRadius: 20,
    backgroundColor: '#E69A8D',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center'
  },
  square: {
    height: 20,
    marginLeft: 4,
    width: 20,
    borderRadius: 5,
    backgroundColor: '#5F4B8B',
    marginRight: 10,
    marginTop: 1
  },
  text: {
    fontSize: 16,
    color: '#5F4B8B'
  }
});
