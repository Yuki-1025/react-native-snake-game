import React from 'react';
import { View, Text } from 'react-native';

const ScoreBoard = ({score, highestScore}) => {

  return (
    <View style={{width: 100}}>
      <Text style={{
              color: 'white',
              marginTop: 15,
              fontSize: 16,
              padding: 8,
              backgroundColor: 'purple',
              borderRadius:10
            }}>Score: {score}</Text>
      <Text style={{
              color: 'white',
              marginTop: 15,
              fontSize: 16,
              padding: 8,
              backgroundColor: 'purple',
              borderRadius:10
            }}>Highest Score: {highestScore}</Text>
    </View>
  )

};

export default ScoreBoard;