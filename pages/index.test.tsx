import HomePage from './index';
import { render, screen } from '../test/test-utils';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<HomePage />);

    const heading = screen.getByText(/Welcome/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
