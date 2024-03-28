import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index';

const Counter = () => {
  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  
  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));
  }
  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
