import { screen, render } from '@testing-library/react';
import { Counter } from './';
import userEvent from '@testing-library/user-event';

const setup = () =>
  render(<Counter />);

describe('Counter', () => {
    it('counter component should render', () => {
        setup();
        expect(screen.getByText('count: 0')).toBeInTheDocument();
    })
    
    it('count should not go below 0 when clicking on decrement', async () => {
        setup();
        await userEvent.click(screen.getByRole('button', {name: /decrement/i}))
        expect(screen.getByText('count: 0')).toBeInTheDocument();
    })

    it ('should increase count by 1 when increment is clicked', async  () => {
        setup();
        await userEvent.click(screen.getByRole('button', {name: /increment/i}))
        expect(screen.getByText('count: 1')).toBeInTheDocument();
    })
})