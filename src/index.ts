import { interpret, Machine } from "xstate";

// The hierarchical (recursive) schema for the states
interface LightStateSchema {
  states: {
    green: {};
    yellow: {};
    red: {
      states: {
        walk: {};
        wait: {};
        stop: {};
      };
    };
  };
}

// The events that the machine handles
type LightEvent =
  | { type: "TIMER" }
  | { type: "POWER_OUTAGE" }
  | { type: "PED_COUNTDOWN"; duration: number };

// The context (extended state) of the machine
interface LightContext {
  elapsed: number;
}

const lightMachine = Machine<LightContext, LightStateSchema, LightEvent>({
  key: "light",
  initial: "green",
  context: { elapsed: 0 },
  states: {
    green: {
      on: {
        TIMER: "yellow",
        POWER_OUTAGE: "red",
      },
    },
    yellow: {
      on: {
        TIMER: "red",
        POWER_OUTAGE: "red",
      },
    },
    red: {
      on: {
        TIMER: "green",
        POWER_OUTAGE: "red",
      },
      initial: "walk",
      states: {
        walk: {
          on: {
            PED_COUNTDOWN: "wait",
          },
        },
        wait: {
          on: {
            PED_COUNTDOWN: {
              target: "stop",
              cond: (context, event) => {
                return event.duration === 0 && context.elapsed > 0;
              },
            },
          },
        },
        stop: {
          on: {
            // Transient transition
            "": { target: "green" },
          },
        },
      },
    },
  },
});

// Machine instance with internal state
const toggleService = interpret(lightMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => '?'

toggleService.send("PED_COUNTDOWN");
// => '?'

toggleService.send("TIMER");
// => '?'
