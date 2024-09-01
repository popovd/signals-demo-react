import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { effect, signal, useSignalEffect } from '@preact/signals-react';
import Dashboard from './components/dashboard/Dashboard';

const state = createAppState();
effect(() => console.log('caught signal change', state.counter.value));

function App() {
  console.log('app render');
  useSignalEffect(() => console.log('effect inside app caught signal change', state.counter.value));
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Dashboard state={state.counter} />
        <button onClick={() => state.counter.value++} className="signal-button">Signal Increment: {state.counter}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}

function createAppState() {
  const counter = signal(0);
  return {
    counter
  }
}
export default App
