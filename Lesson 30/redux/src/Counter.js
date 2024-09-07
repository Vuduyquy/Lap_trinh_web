import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from './actions/actionsCounter';

const Counter = () =>{
    const count = useSelector((state) => state.count);
    const dispath = useDispatch();

    const handleIncrement = () =>{
        dispath(increment(5));
    };

    const handleDecrement = () =>{
        dispath(decrement(2));
    }
    return(
        <div>
            <button onClick={handleIncrement}>Tăng</button>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrement}>Giảm</button>
        </div>
    );
};

export default Counter;