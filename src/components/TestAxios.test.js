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

it('should display and load the data', async () => {
  const url = '/greeting';
  const { getByTestId } = render(<TestAxios url={url} />);
  axiosMock.get.mockResolvedValueOnce({
    data: {
      greeting: 'Hello there',
    },
  });
  fireEvent.click(getByTestId('fetch-data'));
  const greetingData = await waitForElement(() => getByTestId('show-data'));
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toBeCalledWith(url);
  expect(greetingData).toHaveTextContent('Hello there');
});
