// test/pages/index.test.js

import HomePage from '@pages/index';
import React from 'react';
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '../test/test-utils';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<HomePage />);

    const heading = screen.getByText(
      /Testing Next.js With Jest and React Testing Library/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
