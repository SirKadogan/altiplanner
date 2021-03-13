import React from 'react';

import {FiPlus, FiMinus} from 'react-icons/fi';
import {Container} from './styles';

interface CounterProps {
  value?: Number;
  setValue?: () => void;
}

const Counter = ({value = 0, setValue}: CounterProps) => {
  return (
    <Container>
      <FiMinus />
      <span>{value}</span>
      <FiPlus />
    </Container>
  )
}

export default Counter;