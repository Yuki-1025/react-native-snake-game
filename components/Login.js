import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Login = ({onClose}) => {
  const [text, onChangeText] = React.useState("User Name");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onClose}
      >
        <Text>start!</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    width: 200,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 12,
  },
});

export default Login;