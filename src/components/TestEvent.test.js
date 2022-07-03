import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestEvents from './TestEvents';

afterEach(cleanup);

it('should increment the number', () => {
  const { getByTestId } = render(<TestEvents />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should decrement', () => {
  const { getByTestId } = render(<TestEvents />);
  fireEvent.click(getByTestId('button-down')); //0-1
  fireEvent.click(getByTestId('button-down')); //-1 -1
  expect(getByTestId('counter')).toHaveTextContent('-2');
});
