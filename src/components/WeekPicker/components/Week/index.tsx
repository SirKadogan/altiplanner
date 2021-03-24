import React from 'react';

// Components
import { Span } from '../../../Typography';

import { Container, DateRange } from './styles';
import { WeekProps } from '../../index';

interface WeekCardProps {
  active?: boolean;
  week: WeekProps;
}

const Week: React.FC<WeekCardProps> = ({ week }) => {
  return (
    <Container active={true}>
      <Span>Semana {week.weekNumber}</Span>
      <DateRange>{`${week.startOfWeek} - ${week.endOfWeek}`}</DateRange>
    </Container>
  );
};

export default Week;