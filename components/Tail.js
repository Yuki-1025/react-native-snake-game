import React from 'react';
import { View } from 'react-native';
import Constants from './../Constants.js';

const Tail = ({elements, position, size}) => {
  const tailList = elements.map((item, i) => {
    <View
      key={i}
      style={{
        width: size,
        height: size,
        backgroundColor: 'green',
        position: 'absolute',
        left: item[0] * size,
        top: item[1] * size,
      }}/>

  })
  return (
    <View
      style={{
        width: Constants.GRID_SIZE * size,
        height: Constants.GRID_SIZE * size,
      }}
    >
      {tailList}
    </View>
  )
}

export default Tail;