import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterProvider, { CounterContext, Counter } from './TestContext';

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

afterEach(cleanup);

it('check if the initial value is 0', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

it('checks if it increments', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('checks if the number decrements', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  fireEvent.click(getByTestId('button-down'));
  expect(getByTestId('counter')).toHaveTextContent('-1');
});
