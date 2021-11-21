import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';

afterEach(cleanup)

const currentChoice = {
  name: 'choice',
  displayName: 'Dummy Choice For Testing'
}
const anotherChoice = {
  name: 'anotherChoice',
  displayName: 'Another Choice For Testing'
}
const choices = [currentChoice, anotherChoice]

describe('Header component', () => {
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(
      <Header
        choices={choices}
        currentChoice={currentChoice}
        setCurrentChoice={jest.fn()}
      />
    )

    expect(asFragment()).toMatchSnapshot();
  });
})