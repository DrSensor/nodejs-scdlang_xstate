import {LightState} from "./fsm/light";

export enum Color {
  green, yellow, red,
}

export function getRandomColor(): LightState {
  const len = (Object.keys(Color).length / 2); // returns the length
  // calculate the random number
  const item = (Math.floor(Math.random() * len) + 0);
  return Color[item] as LightState;
}
