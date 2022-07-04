import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestAxios from './TestAxios';
import axiosMock from 'axios';

jest.mock('axios');

it('Should be displaying Loading', () => {
  const { getByTestId } = render(<TestAxios />);
  expect(getByTestId('loading').innerHTML).toMatch('Loading...');
  //OR
  // expect(getByTestId('loading')).toHaveTextContent('Loading...');
});
