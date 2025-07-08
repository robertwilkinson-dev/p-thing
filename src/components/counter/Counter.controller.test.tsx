import { screen, render } from '@testing-library/react';
import { CounterController } from './Counter.controller';

jest.mock('./Counter.view', () => ({
  CounterView: jest.fn(props => <p>counter view</p>)
}));

const setup = () =>
  render(<CounterController />);

describe('Counter.controller', () => {
  it('should render the counter view', () => {
    setup();

    expect(screen.getByText('counter view')).toBeInTheDocument();
  })
});