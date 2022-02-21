import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should toggle theme', async () => {
  render(<App />);

  const themeToggle = screen.getByText(/start something/i);

  expect(themeToggle).toBeInTheDocument();
});
