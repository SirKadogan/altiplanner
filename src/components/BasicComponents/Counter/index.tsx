import React from 'react';

import {FiPlus, FiMinus} from 'react-icons/fi';
import {Container} from './styles';

interface CounterProps {
  counter: number;
  setCounter: React.Dispatch<number>;
}

const Counter = ({counter, setCounter}: CounterProps) => {

  const decrement = () => {
    if (counter <= 0){
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <Container>
      <FiMinus onClick = {decrement}/>
      <span>{counter}</span>
      <FiPlus onClick= {increment}/>
    </Container>
  )
}

export default Counter;