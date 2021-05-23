import { rerender } from '.';

export function createElement(type, props, ...children) {
  // It's a component!
  if (typeof type === 'function') {
    const Component = type;

    // Return the result of calling the component with props
    // React Component - a function that returns JSX
    return Component(props);
  }

  const reactElement = {
    type,
    props: {
      ...props,
      children,
    },
  };

  return reactElement;
}

let states = [];
let stateIndex = 0;

export function useState<S>(initialState): [S, (S) => void] {
  const currentIndex = stateIndex;

  // Use initial state only if there is no state yet
  states[currentIndex] = states[currentIndex] || initialState;

  const setState = newState => {
    states[currentIndex] = newState;

    // Rerender the component when state has changed and set stateIndex back to 0.
    rerender(() => (stateIndex = 0));
  };

  // Increment stateIndex so that next call to useState will be responsible for 
  // next piece of state
  stateIndex++;

  // Return state, and setter
  return [states[currentIndex], setState];
}
