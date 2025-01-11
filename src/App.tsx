
import './App.css'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const dispatch = useAppDispatch();
  const {count}= useAppSelector((state)=>state.counter)

  const handleIncrement = ()=>{
    dispatch(increment());
  }

  const handleDecrement = ()=>{
    dispatch(decrement());
  }
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>Decrement</button>

    </>
  )
}

export default App
