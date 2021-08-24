import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Constants from './Constants';
import Head from './components/Head.js';
import Tail from './components/Tail.js';
import Food from './components/Food.js';
import GameLoop from './systems/GameLoop.js';

export default function App() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const positionGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [isGameRunning, setIsGameRunning] = useState(true);

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={{
          width: BoardSize,
          height: BoardSize,
          flex: null,
          backgroundColor: 'white'
        }}
        entities={{
          head: {
            position: [0, 0],
            size: Constants.CELL_SIZE,
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 0,
            yspeed: 0,
            renderer: <Head />
          },
          food: {
            position: [positionGenerator(0, Constants.GRID_SIZE - 1), positionGenerator(0, Constants.GRID_SIZE - 1)],
            size: Constants.CELL_SIZE,
            renderer: <Food />
          },
          tail: {
            size: Constants.CELL_SIZE,
            length: [],
            renderer: <Tail />
          }
        }}
        systems={[GameLoop]}
        running={isGameRunning}
        onEvent={(e) => {
          switch(e) {
            case 'game-over':
              alert('Game over!');
              setIsGameRunning(false);
              return;
          }
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex:1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
