import * as React from './react';
import * as ReactDOM from './react-dom';

function App() {
  return (
    <div className="app">
      <h1>Hello, person!</h1>
      <p>{1324414}</p>
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

ReactDOM.render(<App />, document.getElementById('root'));
