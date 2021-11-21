import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutMe from '..';

afterEach(cleanup)

describe('AboutMe component', () => {
  it('renders', () => {
    render(<AboutMe />)
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<AboutMe />)

    expect(asFragment()).toMatchSnapshot();
  });
})