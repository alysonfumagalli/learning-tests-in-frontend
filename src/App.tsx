import { Text } from '@mantine/core';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <>
      <h1>Number Guesser</h1>
      <Text>
        Welcome to the Number Guesser Game! Try to guess the number between 1
        and 100.
      </Text>
      <Game />
    </>
  );
}

export default App;
