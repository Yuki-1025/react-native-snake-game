import React, { useState, useEffect } from 'react';
import Constants from './../Constants.js';
import { View } from 'react-native';

function Obstacles ({ size, score }) {
  console.log('IN OBS ', score);
  // const [points, setPoints] = useState(score);
  // useEffect(()=> {
  //   setPoints(score);
  // }, [score]);

  if (score >= 20) {
    var numOfTiles = Math.floor((score - 20) / 10) + 2;
    const positionGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var obstacleList = [...Array(numOfTiles)].map(() => {
      return (
        <View
          style={{
            width: size,
            height: size,
            backgroundColor: 'grey',
            position: 'absolute',
            left: positionGenerator(0, Constants.GRID_SIZE - 1) * size,
            top: positionGenerator(0, Constants.GRID_SIZE - 1) * size,
            alignItems: 'center',
          }}>
        </View>
      )
    });
    return (
      <View>{obstacleList}</View>
    );
  } else {
    return null;
  }
};

export default Obstacles;