import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component', () => {
  let asFragment
  let getByPlaceholderText
  let getByTestId
  let nameElement
  let emailElement
  let messageElement
  let submitButton

  const getErrorTextElement = () => getByTestId('errorText')

  beforeEach(() => {
    ({ asFragment, getByPlaceholderText, getByTestId } = render(<Contact />))
    nameElement = getByPlaceholderText('name')
    emailElement = getByPlaceholderText('email')
    messageElement = getByPlaceholderText('message')
    submitButton = getByTestId('submitButton')
  })

  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('informs of empty name', () => {
    nameElement.focus()
    nameElement.blur()

    expect(getErrorTextElement()).toHaveTextContent('name')
  })

  it('informs of empty email', () => {
    emailElement.focus()
    emailElement.blur()

    expect(getErrorTextElement()).toHaveTextContent('email')
  })

  it('informs of invalid email', () => {
    emailElement.focus()
    userEvent.type(emailElement, 'not_valid')
    emailElement.blur()

    expect(getErrorTextElement()).toHaveTextContent('invalid')
  })

  it('informs of empty message', () => {
    messageElement.focus()
    messageElement.blur()

    expect(getErrorTextElement()).toHaveTextContent('message')
  })

  it('enables submit button as soon as form is valid', () => {
    expect(submitButton.disabled).toBeTruthy()

    userEvent.type(nameElement, 'John Coltrane')
    expect(submitButton.disabled).toBeTruthy()

    userEvent.type(emailElement, 'john.coltrane@test.com')
    expect(submitButton.disabled).toBeTruthy()

    userEvent.type(messageElement, 'Play more bebop, it\'s really good for the soul.')
    expect(submitButton.disabled).toBeFalsy()
  })
})