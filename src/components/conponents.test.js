import renderer from 'react-test-renderer';
import React from 'react';
import { Router } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Quote from './Quote';
import Calculator from './Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  <Router>
    const tree = renderer.create(
    <Nav />
    ).toJSON(); expect(tree).toMatchSnapshot();
  </Router>;
});

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
