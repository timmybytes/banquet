import { render, screen } from '../../test/test-utils';
import HomePage from './index';

describe('HomePage', () => {
  it('should render', () => {
    render(<HomePage />);

    const heading = screen.getByText(/Welcome/i);

    expect(heading).toBeInTheDocument();
  });
});
