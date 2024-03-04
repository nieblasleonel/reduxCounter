import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  console.log(counter);

  const incrementHandler = () =>{
    dispatch({type: 'INCREMENT'});
  }
  const increaseHandler = () =>{
    dispatch({type: 'INCREASE', amount: 5 });
  }
  const decrementHandler = () =>{
    dispatch({type: 'DECREMENT'});
  }
  const resetHandler = () => {
    dispatch({type: 'RESET'});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'});
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
