import React from 'react';

// Components
import {Span} from '../../../Typography';

import { Container, DateRange } from './styles';

const Week = () => {
  return (
    <Container>
      <Span>Semana 1</Span>
      <DateRange>16/03 - 23/03</DateRange>
    </Container>
  );;
}

export default Week;