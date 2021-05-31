import { rerender } from '.';

/**
 * createElement
 */
export function createElement(type, props, ...children) {
  // It's a component!
  if (typeof type === 'function') {
    const Component = type;

    try {
      // Return the result of calling the component with props
      // React Component - a function that returns JSX
      return Component(props);

      // Catch promise and key
    } catch ({ promise, key }) {

      // Once promise was resolved, update the cache with returned data
      // and then rerender
      promise.then(data => {
        promiseCache.set(key, data);

        rerender();
      });

      // When the promise is not yet resolved return some loading indicator
      // in this case simply: <h1>Loading</h1>
      return {
        type: 'h1',
        props: {
          children: ['Loading...'],
        },
      };
    }
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
let stateCursor = 0;

/**
 * useState
 */
export function useState<S>(initialState): [S, (S) => void] {
  const localCursor = stateCursor;

  // Use initial state only if there is no state yet
  states[localCursor] = states[localCursor] || initialState;

  const setState = newState => {
    states[localCursor] = newState;

    // Rerender the component when state has changed and set stateCursor back to 0.
    rerender(() => (stateCursor = 0));
  };

  // Increment stateCursor so that next call to useState will be responsible for
  // next piece of state
  stateCursor++;

  // Return state, and setter
  return [states[localCursor], setState];
}

const promiseCache = new Map();

/**
 * createResource - poor version of concurrent mode
 */
export function createResource(fnThatReturnsPromise, key) {

  // If the promise was resolved it is already stored in the cache so
  // just return it
  if (promiseCache.has(key)) {
    return promiseCache.get(key);
  }

  // Otherwise throw an object with a promise and a key so that it can be catched 
  // inside createElement
  throw { promise: fnThatReturnsPromise(), key };
}
