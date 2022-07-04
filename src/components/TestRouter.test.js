import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import TestRouter from './TestRouter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it('should load to homepage', () => {
  const { getByTestId, container } = renderWithRouter(<TestRouter />);
  const homeLink = getByTestId('home-link');
  const navbar = getByTestId('navbar');
  expect(container.innerHTML).toMatch('Home page');
  expect(navbar).toContainElement(homeLink);
});

it('should load to about page', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  fireEvent.click(getByTestId('about-link'));
  expect(container.innerHTML).toMatch('About page');
});

it('should render to contact link', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);
  fireEvent.click(getByTestId('contact-link'));
  expect(container.innerHTML).toMatch('John Doe');
});
