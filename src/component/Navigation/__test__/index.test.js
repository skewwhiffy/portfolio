import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';
import userEvent from '@testing-library/user-event';

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

describe('Navigation component', () => {
  let setCurrentChoice
  let asFragment
  let getByText

  beforeEach(() => {
    setCurrentChoice = jest.fn();
    ({ asFragment, getByText } = render(
      <Navigation
        choices={choices}
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
      />
    ))
  })

  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls setCurrentChoice when clicking', () => {
    getByText(anotherChoice.displayName).click()

    expect(setCurrentChoice).toHaveBeenCalledWith(anotherChoice)
  })
})