import styled from 'styled-components';

import COLORS from '../../../../constants/colors';
import { Card } from '../../../BasicComponents/Card/styles';
import { lighten } from 'polished'

interface WeekProps {
  active?: boolean;
  onClick: () => void;
}

export const Container = styled(Card) <WeekProps>`
  width: 100%;
  padding: 5px;
  /* border: 1px solid ${COLORS.ACCENT}; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 3px;
  color: ${(props) => props.active ? 'white' : COLORS.SUPPORT};
  background-color: ${(props) => props.active ? COLORS.SUPPORT : 'transparent'};


  span {
    color: ${(props) => props.active ? 'white' : COLORS.SUPPORT};
    font-weight: bold;
  }

  p {
    color: ${(props) => props.active ? 'white' : COLORS.SUPPORT};
  }

  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.05, COLORS.SUPPORT)};
    color: white;
    span, p {
      color: white
    }
  }
`;

export const DateRange = styled.p`
  font-size: 12px;
  margin-top: 5px;
  
`;