import React from 'react';
import {
  cleanup,
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import TestAsync from './TestAsync';

afterEach(cleanup);

it('should be delayed for 0.5s', async () => {
  const { getByText, getByTestId } = render(<TestAsync />);
  fireEvent.click(getByTestId('button-up'));
  const counter = await waitForElement(() => getByText('1'));
  expect(counter).toHaveTextContent('1');
});
