import React from 'react';
import { View } from 'react-native';
import { GiShinyApple } from 'react-icons/gi';
import { FcLike } from 'react-icons/fc';


const Food = ({position, size, counter}) => {
  if (counter % 3 === 0) {
    return (
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: 'yellow',
          position: 'absolute',
          left: position[0] * size,
          top: position[1] * size,
          borderRadius: 50, //make it a circle
          alignItems: 'center',
        }}>
          <FcLike style={{ fontSize: '2em'}}/>
      </View>
    )
  } else {
    return (
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: 'yellow',
          position: 'absolute',
          left: position[0] * size,
          top: position[1] * size,
          borderRadius: 50, //make it a circle
          alignItems: 'center',
        }}>
          <GiShinyApple style={{color: 'red', fontSize: '2em'}}/>
      </View>
    )
  }
};

export default Food;