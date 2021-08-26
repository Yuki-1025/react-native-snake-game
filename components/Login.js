import React from 'react';
import axios from 'axios';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Login = ({onClose}) => {
  const [text, onChangeText] = React.useState("User Name");
  const [records, setRecords] = React.useState('');
  const [showRecords, setShowRecords] = React.useState(false);
  const getRecords = () => {
    setShowRecords(true);
    axios.get('http://localhost:3000/records')
    .then((result) => {
      setRecords(result.data)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={styles.logo}
        source={{
          // uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/snake-game-1513688-1282916.png',
          uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/snake-game-1513124-1282989.png',
        }}
      />
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
        <Text>Play!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={getRecords}
      >
        <Text>Check score board</Text>
      </TouchableOpacity>
      {showRecords && <Text style={styles.records}>{records}</Text>}
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
  records: {
    backgroundColor: "#DDDDDD",
  },

  logo: {
    width: 126,
    height: 118,
    padding: 10,
    margin: 12,
  },
});

export default Login;