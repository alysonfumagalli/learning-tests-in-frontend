import { Flex, Text } from '@mantine/core';
import { AppTextInput } from './AppTextInput';
import { useState } from 'react';
import { AppButton } from './AppButton';

interface GameProps {
  numberToGuess?: number; // Optional prop for testing purposes
}

const Game = ({ numberToGuess }: GameProps) => {
  const actualNumberToGuess =
    numberToGuess ?? Math.floor(Math.random() * 100) + 1;
  const [guess, setGuess] = useState<number>();
  const [feedback, setFeedback] = useState<string>('');

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess === actualNumberToGuess) {
      setFeedback('Congratulations! You guessed correctly.');
    } else if (guess && guess > actualNumberToGuess) {
      setFeedback(`Too high! Try a lower number than ${guess}.`);
    } else if (guess && guess < actualNumberToGuess) {
      setFeedback(`Too low! Try a higher number than ${guess}.`);
    } else {
      setFeedback('Please enter a valid number between 1 and 100.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 100) {
      setGuess(value);
    } else {
      setFeedback('Please enter a valid number between 1 and 100.');
      setGuess(undefined);
    }
  };

  return (
    <>
      <form onSubmit={handleGuess}>
        <Flex justify="center" gap="md" mt={20}>
          <AppTextInput
            placeholder="Type your guess here"
            value={String(guess ?? '')}
            onChange={handleChange}
          />
          <AppButton label="Submit Guess" type="submit" />
        </Flex>
      </form>
      {feedback && <Text mt={20}>{feedback}</Text>}
    </>
  );
};

export default Game;
