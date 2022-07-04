import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterProvider, { CounterContext, counter } from './TestContext';

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

afterEach(cleanup);

it('check if the initial value is 0', () => {
  const { getByTestId } = renderWithContext(<counter />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});
