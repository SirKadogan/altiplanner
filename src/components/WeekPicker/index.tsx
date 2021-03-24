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

    return {
      startOfWeek,
      endOfWeek,
      weekNumber,
    }
  }

  const currentWeek = moment().isoWeek();
  const [weeks, setWeeks] = useState<WeekProps[]>([]);
  const [counter, setCounter] = useState(0);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  useEffect(() => {
    buildWeekArray(currentWeek + counter);
  }, [counter]);


  const buildWeekArray = (weekToBuild: number) => {
    const newWeeks = [
      buildWeek(weekToBuild - 1),
      buildWeek(weekToBuild),
      buildWeek(weekToBuild + 1)
    ];
    setWeeks(newWeeks);
  }

  const handleArrowClick = (operation: string) => {
    if (operation === '+') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <Container>
      <FiChevronLeft onClick={() => handleArrowClick('-')} />
      <WeekContainer>
        {weeks.map(week => <Week week={week} active={week.weekNumber === selectedWeek} onClick={() => setSelectedWeek(week.weekNumber)} />)}
      </WeekContainer>
      <FiChevronRight onClick={() => handleArrowClick('+')} />
    </Container>
  );
}

export default WeekPicker;