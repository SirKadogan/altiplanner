import React from 'react';


// Components
import Week from './components/Week';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container, WeekContainer } from "./styles";

const WeekPicker = () => {
  return (
    <Container>
      <FiChevronLeft />
      <WeekContainer>
        <Week />
        <Week active />
        <Week />
      </WeekContainer>
      <FiChevronRight />
    </Container>
  );
}

export default WeekPicker;