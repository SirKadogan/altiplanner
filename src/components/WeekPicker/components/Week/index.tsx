import React from 'react';

// Components
import { Span } from '../../../Typography';

import { Container, DateRange } from './styles';
import { WeekProps } from '../../index';

interface WeekCardProps {
  active?: boolean;
  week: WeekProps;
  onClick: () => void;
}

const Week: React.FC<WeekCardProps> = ({ week, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      <Span>Semana {week.weekNumber}</Span>
      <DateRange>{`${week.startOfWeek} - ${week.endOfWeek}`}</DateRange>
    </Container>
  );
};

export default Week;