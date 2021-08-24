import React from 'react';
import Constants from './../Constants.js';

export default function (entities, {events, dispatch}) {
  const head = entities.head;
  const food = entities.food;

  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;
    if (
      head.position[0] + head.xspeed < 0 ||
      head.position[0] + head.xspeed >= Constants.GRID_SIZE ||
      head.position[1] + head.yspeed < 0 ||
      head.position[1] + head.yspeed >= Constants.GRID_SIZE
    ) {
      dispatch('game-over');//game over EVENT
    } else {
      head.position[0] += head.xspeed;
      head.position[1] += head.yspeed;

      if (
        head.position[0] === food.position[0] &&
        head.position[1] === food.position[1]
      ) {
        //generate a new food
        food.position = [positionGenerator(0, Constants.GRID_SIZE - 1), positionGenerator(0, Constants.GRID_SIZE - 1)];
        //add length
      }
    }
  }
  return entities;
};