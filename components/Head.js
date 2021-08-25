import React from 'react';
import { View } from 'react-native';
import { GoOctoface } from 'react-icons/go';

const Head = ({position, size}) => {

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'green',
        position: 'absolute',
        left: position[0] * size,
        top: position[1] * size,
        alignItems: 'center',
      }}>
        <GoOctoface style={{color: 'black', fontSize: '2em'}}/>
    </View>
  )
}

export default Head;