import React from 'react';

// Components
import {Span} from '../../../Typography';

import { Container, DateRange } from './styles';

interface WeekProps {
  active?: boolean;
}

const Week: React.FC<WeekProps> = ({ active }) => {
  return (
    <Container active= {active}>
      <Span>Semana 1</Span>
      <DateRange>16/03 - 23/03</DateRange>
    </Container>
  );
};

export default Week;