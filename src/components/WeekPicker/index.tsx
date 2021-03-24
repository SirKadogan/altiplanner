import React, { useEffect, useState } from 'react';

// Libraries
import moment from 'moment';

// Components
import Week from './components/Week';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container, WeekContainer } from "./styles";

export interface WeekProps {
  startOfWeek: string;
  endOfWeek: string;
  weekNumber: number;
}

const WeekPicker = () => {

  const buildWeek = (weekNumber: number): WeekProps => {
    const isoWeek = moment().isoWeek(weekNumber);
    const startOfWeek = isoWeek.clone().weekday(0).format('DD/MM');
    const endOfWeek = isoWeek.clone().weekday(6).format('DD/MM');

    console.log({ weekNumber, startOfWeek, endOfWeek });
    return {
      startOfWeek,
      endOfWeek,
      weekNumber,
    }
  }


  const currentWeek = moment().isoWeek();
  const [weeks, setWeeks] = useState<WeekProps[]>([]);

  useEffect(() => {
    const newWeeks = [
      buildWeek(currentWeek - 1),
      buildWeek(currentWeek),
      buildWeek(currentWeek + 1)
    ];
    setWeeks(newWeeks);
  }, []);



  return (
    <Container>
      <FiChevronLeft />
      <WeekContainer>
        {weeks.map(week => <Week week={week} />)}
      </WeekContainer>
      <FiChevronRight />
    </Container>
  );
}

export default WeekPicker;