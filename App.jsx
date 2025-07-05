import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; //  Import useState for local component state
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './Features/Counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0); // Define amount as a state variable

  function handlerIncreaseClick() {
    dispatch(increment());
  }

  function handlerDecreaseClick() {
    dispatch(decrement());
  }

  function handlerResetClick() {
    dispatch(reset());
  }

  function handleInAmountClick() {
    dispatch(incrementByAmount(Number(amount))); //  Ensure amount is a number when dispatching
    setAmount(0); // Optional: Reset the amount input after dispatching
  }

  return (
    <>
      <div>
        <button onClick={handlerIncreaseClick}>+</button>
        <p>Counter: {count}</p>
        <button onClick={handlerDecreaseClick}>-</button>
        <button onClick={handlerResetClick}>Reset</button>
        <input
          type="number"
          value={amount}
          placeholder='Enter the Amount'
          onChange={(e) => setAmount(e.target.value)} //  Correct onChange handler and typo
        />
        <br />
        <br />
        <button onClick={handleInAmountClick}>Increment by Amount</button> {/* Add text to button */}
      </div>
    </>
  );
}

export default App;