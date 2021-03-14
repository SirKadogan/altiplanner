import styled from "styled-components";

import COLORS from '../../../constants/colors';

interface ProgressProps {
  progress: number;
}

export const Container = styled.div<ProgressProps>`
  height: 8px;
  border-radius: 4px;
  min-width: 4px;
  width: ${(props) => `${props.progress}%`};
  background-color: ${COLORS.ACCENT};
  max-width: 100%;

  -webkit-transition: width 0.5s ease-in-out;
  -moz-transition: width 0.5s ease-in-out;
  -o-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
`;

