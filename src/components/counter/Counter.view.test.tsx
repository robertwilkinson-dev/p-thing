import userEvent from '@testing-library/user-event';
import { CounterView, CounterViewProps } from './Counter.view';
import { screen, render } from '@testing-library/react';

const mockOnIncrement = jest.fn();
const mockOnDecrement = jest.fn();

const defaultProps: CounterViewProps = {
    onIncrement: mockOnIncrement,
    onDecrement: mockOnDecrement,
    count: 0
}

const setup = (props: CounterViewProps = defaultProps) =>
    render(<CounterView {...props} />)

describe('Counter.view', () => {
    it('should render a button to increment the count', () => {
        setup();

        expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
    })
    
    it('should render a button to decrement the count', ()=>{
        setup();

        expect(screen.getByRole('button', {name: /decrement/i})).toBeInTheDocument();
    })

    it('show the count of the counter', () => {
       setup();
       
       expect(screen.getByText('count: 0')).toBeInTheDocument();
    })

    it('should call the increment function when the increment button is clicked', async () => {
        setup();

        const button = screen.getByRole('button', {name: /increment/i})
        await userEvent.click(button);
        
        expect(mockOnIncrement).toHaveBeenCalledTimes(1);
    })

    it('should call the decrement function when the decrement button is clicked', async () => {
        setup();

        const button = screen.getByRole('button', {name: /decrement/i})
        await userEvent.click(button);
        
        expect(mockOnDecrement).toHaveBeenCalledTimes(1);
    })

    it('count should reflect the given count', () => {
        setup({ ...defaultProps, count: 10 });

        expect(screen.getByText('count: 10')).toBeInTheDocument();
    })
});
