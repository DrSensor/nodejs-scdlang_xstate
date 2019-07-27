import {interpret, Machine} from "xstate";
import {EventIn, light as trafficLight, LightEvent, LightSchema} from "./fsm/light";
import {getRandomColor} from "./random";

// The context (extended state) of the machine
interface LightContext {
  elapsed: number;
}

const lightMachine = Machine<LightContext, LightSchema, LightEvent>({
  initial: getRandomColor(), // 👈 let say it recover state from corrupted memory
  ...trafficLight,
});

// Machine instance with internal state
const toggleService = interpret(lightMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => '?'

toggleService.send("POWER_OUTAGE");
// => 'red'

toggleService.send("TIMER" as EventIn["red"]);
// => 'green'
