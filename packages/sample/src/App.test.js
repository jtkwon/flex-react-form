import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  test('should render App component without crashing', () => {
    render(<App />);
  });

  test('should check paaragraph', () => {
    render(<App />);
    screen.getByText('Test');
    let error;
    try {
      expect(screen.getByText('Test')).toBeInTheDocument(); // explicit assertion
    } catch (err) {
      error = err;
    }
    expect(error).not.toBeDefined();
  });
});
