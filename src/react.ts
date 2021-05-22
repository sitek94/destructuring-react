import { rerender } from '.';

export function createElement(type, props, ...children) {
  // It's a component!
  if (typeof type === 'function') {
    const Component = type;
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

  states[currentIndex] = states[currentIndex] || initialState;

  const setState = newState => {
    states[currentIndex] = newState;
    rerender(() => (stateIndex = 0));
  };

  stateIndex++;

  return [states[currentIndex], setState];
}
