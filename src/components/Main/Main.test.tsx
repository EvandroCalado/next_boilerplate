import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Main', () => {
  it('should render a heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
