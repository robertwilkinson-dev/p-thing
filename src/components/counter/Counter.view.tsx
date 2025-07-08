import { FC } from "react";

export type CounterViewProps = {
    onIncrement: () => void,
    onDecrement: () => void,
    count: number
}

export const CounterView: FC<CounterViewProps> = ({ onIncrement, onDecrement, count }) => (
    <div className='rounded-lg bg-blue-300 p-4 flex flex-col items-center justify-center gap-2'>
        <p>count: {count}</p>

        <div className='flex items-center justify-center gap-2'>
            <button
                className='bg-blue-500 text-white rounded px-2 py-1 mr-2'
                onClick={onIncrement}
            >
                increment
            </button>
            <button 
                className='bg-blue-500 text-white rounded px-2 py-1 mr-2'
                onClick={onDecrement}
            >
                decrement
            </button>
        </div>
    </div>
);
