
import './App.css'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook';
import { Button } from "@/components/ui/button"
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
      <Button onClick={handleIncrement}>Increment</Button>
      <h2>{count}</h2>
      <Button onClick={handleDecrement}>Decrement</Button>

    </>
  )
}

export default App
