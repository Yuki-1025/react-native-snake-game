//import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from './Constants';
import Head from './components/Head.js';
import Tail from './components/Tail.js';
import Food from './components/Food.js';
import GameLoop from './systems/GameLoop.js';
import ScoreBoard from './components/score.js';
import Lives from './components/Lives.js';
import Obstacles from './components/Obstacles.js';
import Login from './components/Login';

export default function App() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const positionGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [isGameRunning, setIsGameRunning] = useState(true);
  const [retry, setRetry] = useState(false);
  const [hearts, setHearts] = useState(3);
  const [foodCount, setFoodCount] = useState(1);
  const [score, setScore] = useState(0);

  const [showGame, setShowGame] = useState(false);

  const resetGame = () => {
    //setHearts(3);
    console.log('RESET HEARTS ', hearts);
    engine.current.swap({
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
        counter: foodCount,
        setCounter: setFoodCount,
        renderer: <Food/>
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail/>
      },
      board: {
        score: score,
        setScore: setScore,
        highestScore: localStorage.getItem('snakeHighest') || 0,
        renderer: <ScoreBoard/>
      },
      livesBoard: {
        lives: hearts,
        setLives: setHearts,
        renderer: <Lives/>
      },
      // obstacles: {
      //   size: Constants.CELL_SIZE,
      //   score: score,
      //   renderer: <Obstacles/>
      // }
    });
    setIsGameRunning(true);
  };

  const tryAgain = () => {
    console.log('Try again hearts ', hearts);
    engine.current.swap({
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
        counter: foodCount,
        setCounter: setFoodCount,
        renderer: <Food/>
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail/>
      },
      board: {
        score: score,
        setScore: setScore,
        highestScore: localStorage.getItem('snakeHighest') || 0,
        renderer: <ScoreBoard/>
      },
      livesBoard: {
        lives: hearts,
        setLives: setHearts,
        renderer: <Lives/>
      },
      // obstacles: {
      //   size: Constants.CELL_SIZE,
      //   score: score,
      //   renderer: <Obstacles/>
      // }
    });
    setRetry(false);
    setIsGameRunning(true);
  }

  return (
    <View style={styles.canvas}>
      {!showGame && <Login onClose={()=> setShowGame(true)}/>}
      {showGame && (
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
                counter: foodCount,
                setCounter: setFoodCount,
                renderer: <Food />
              },
              tail: {
                size: Constants.CELL_SIZE,
                elements: [],
                renderer: <Tail />
              },
              board: {
                score: score,
                setScore: setScore,
                highestScore: localStorage.getItem('snakeHighest') || 0,
                renderer: <ScoreBoard/>
              },
              livesBoard: {
                lives: hearts,
                setLives: setHearts,
                renderer: <Lives/>
              },
              // obstacles: {
              //   positions: [],
              //   size: Constants.CELL_SIZE,
              //   score: score,
              //   renderer: <Obstacles/>
              // }
            }}
            systems={[GameLoop]}
            running={isGameRunning}
            onEvent={(e) => {
              switch(e) {
                case 'game-over':
                  alert('Game over!');
                  setIsGameRunning(false);
                  setHearts(3);
                  setScore(0);
                  return;
                case 're-try':
                  alert('Try again!');
                  setRetry(true);
                  setIsGameRunning(false);
                  return;
              }
            }}
            /><br/>
            <View style={styles.controlContainer}>
              <View style={styles.controllerRow}>
                <TouchableOpacity onPress={() => engine.current.dispatch("move-up")}>
                  <View style={styles.controlBtn} />
                </TouchableOpacity>
              </View>
              <View style={styles.controllerRow}>
                <TouchableOpacity
                  onPress={() => engine.current.dispatch("move-left")}
                >
                  <View style={styles.controlBtn} />
                </TouchableOpacity>
                <View style={[styles.controlBtn, { backgroundColor: null }]} />
                <TouchableOpacity
                  onPress={() => engine.current.dispatch("move-right")}
                >
                  <View style={styles.controlBtn} />
                </TouchableOpacity>
              </View>
              <View style={styles.controllerRow}>
                <TouchableOpacity
                  onPress={() => engine.current.dispatch("move-down")}
                >
                  <View style={styles.controlBtn} />
                </TouchableOpacity>
              </View>
            </View>
            {!isGameRunning && !retry && (
              <TouchableOpacity onPress={resetGame}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 15,
                    fontSize: 22,
                    padding: 10,
                    backgroundColor: 'grey',
                    borderRadius:10
                  }}
                >
                  Start New Game
                </Text>
              </TouchableOpacity>
            )}{
              retry && (
                <TouchableOpacity onPress={tryAgain}>
                  <Text
                    style={{
                      color: 'white',
                      marginTop: 15,
                      fontSize: 22,
                      padding: 10,
                      backgroundColor: 'grey',
                      borderRadius:10
                    }}
                  >
                    One more time
                  </Text>
                </TouchableOpacity>
              )
            }
        </View>
      )}
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
  controlContainer: {
    marginTop: 10,
  },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlBtn: {
    backgroundColor: "pink",
    width: 100,
    height: 100,
  },
});

