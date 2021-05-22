import * as React from './react';
import { render } from './react-dom';

function App() {
  const [name, setName] = React.useState('person');

  return (
    <div className="app">
      <h1>Name: {name}</h1>
      <input type="text" onchange={e => setName(e.target.value)} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        laborum ducimus. Quasi reiciendis quidem ex eos, nisi officiis! Neque
        quaerat blanditiis aut optio corporis esse animi vero repellat
        repudiandae omnis.
      </p>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <button className="btn" onclick={() => console.log('Hello button')}>
      Click me
    </button>
  );
}

const root = document.getElementById('root');

/**
 * Super fast reconcilliation engine 🚀
 */
export function rerender() {
  root.firstChild.remove();
  render(<App />, root);
}

// Initial render
render(<App />, document.getElementById('root'));
