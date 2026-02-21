import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from '../../components/Game';
import { renderWithProviders } from '../utils/renderWithProviders';

describe('Game Component', () => {
  beforeEach(() => {
    renderWithProviders(<Game numberToGuess={50} />);
  });

  it('renders without crashing', () => {
    // Render the Game component and check if it renders correctly
    expect(
      screen.getByPlaceholderText(/Type your guess here/i),
    ).toBeInTheDocument();
  });

  it('provides feedback for correct guess', async () => {
    // Simulate a correct guess and check if the feedback is correct
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('Type your guess here');
    await user.type(input, '50');

    const submitButton = screen.getByRole('button', {
      name: /submit guess/i,
    });
    await user.click(submitButton);

    expect(
      await screen.findByText(/congratulations! you guessed correctly./i),
    ).toBeInTheDocument();
  });

  it('provides feedback for too high guess', () => {
    // Simulate a guess that is too high and check if the feedback is correct
  });

  it('provides feedback for too low guess', () => {
    // Simulate a guess that is too low and check if the feedback is correct
  });

  it('provides feedback for invalid input', () => {
    // Simulate an invalid input and check if the feedback is correct
  });
});
