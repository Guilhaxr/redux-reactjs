import "./Counter.css"
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from "./redux/ducks/counter";

const Counter = () => {
    //the counter is my state into the combineReducer, and the count name is the initial state
    // const count = useSelector((state)=> state.counter.count);

    const dispatch = useDispatch();

    // const [count, setCount ] = useState(0)
    
    const handleIncrement = ()=> {
        // setCount( count + 1)
        dispatch(increment())
    }

    const handleDecrement = ()=> {
        // setCount( count - 1)
        dispatch(decrement())
    }


    return(
        <div className="counter__component">   
            {/* <h3 className="counter__result">{`Count: ${count}`}</h3> */}
            <div className="counter__buttons">
                <button onClick={handleIncrement} >+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

export default Counter;