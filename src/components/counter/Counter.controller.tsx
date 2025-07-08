import { FC, useState } from 'react';
import { CounterView } from './Counter.view';


export const CounterController: FC = () => {
    const [count, setCount]  = useState<number>(0);

    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => {
        if (count === 0) {
            return;
        } 
        setCount(count - 1)
    };

    return <CounterView count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
};
