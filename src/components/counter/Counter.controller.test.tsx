import { screen, render } from '@testing-library/react';
import { CounterController } from './Counter.controller';
import { CounterView } from './Counter.view';

jest.mock('./Counter.view', () => ({
  ...jest.requireActual('./Counter.view'),
  CounterView: jest.fn(),
}));

const setup = () =>
  render(<CounterController />);

describe('Counter.controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (CounterView as jest.Mock).mockReturnValue(
      <div data-testid="counter-view">Counter View</div>
    );
  });

  it('should render the counter view', () => {
    setup();

    expect(screen.getByTestId('counter-view')).toBeInTheDocument();
  });

  it('should pass the correct props to the CounterView', () => {
    setup();

    expect(CounterView).toHaveBeenCalledTimes(1);
    expect(CounterView).toHaveBeenCalledWith(
      expect.objectContaining({
        count: 0,
        onIncrement: expect.any(Function),
        onDecrement: expect.any(Function)
      })
      , undefined
    );
  })
});
