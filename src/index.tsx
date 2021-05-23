import * as React from './react';
import { render } from './react-dom';

function App() {
  const [name, setName] = React.useState<string>('person');
  const [count, setCount] = React.useState<number>(0);
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="app">
      <h1>Destructuring React</h1>
      <hr />

      <h2>Name: {name}</h2>
      <input type="text" onchange={e => setName(e.target.value)} />
      <hr />

      <h2>Count: {count}</h2>
      <button onclick={() => setCount(count + 1)}>➕</button>
      <button onclick={() => setCount(count - 1)}>➖</button>
      <hr />

      <h2>Time: {date.toLocaleTimeString()}</h2>
      <button onclick={() => setDate(new Date())}>Update time</button>
      <hr />

      <RandomPhoto />
    </div>
  );
}

function RandomPhoto() {
  const photoUrl = React.createResource(
    () => fetch('https://picsum.photos/300').then(res => res.url),
    'photo-url',
  );

  return <img src={photoUrl} alt="Random" />;
}

const root = document.getElementById('root');

/**
 * Super fast reconcilliation engine 🚀
 */
export function rerender(resetIndexCb?: () => void) {
  resetIndexCb?.();
  root.firstChild.remove();
  render(<App />, root);
}

// Initial render
render(<App />, document.getElementById('root'));
