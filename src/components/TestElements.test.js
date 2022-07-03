import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements';

afterEach(cleanup);

it('should be 0', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('counter').textContent).toBe('0');
});

//if the button is enabled

it('should be enabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

//if the button is enabled

it('should be enabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-down')).toBeDisabled();
});
