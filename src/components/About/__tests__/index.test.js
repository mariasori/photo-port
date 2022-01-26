//import react
import React from 'react';

//incorporate react testing library
import { render, cleanup } from '@testing-library/react';

//import jest-dom package
import '@testing-library/jest-dom/extend-expect';

//import About component
import About from '..';

//configure testing environment
afterEach(cleanup);

describe('About component', () => {
    // First Test - test that component is rendering
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  });