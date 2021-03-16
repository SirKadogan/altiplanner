import styled from 'styled-components';

import COLORS from '../../../../constants/colors';

export const Container = styled.div`
  width: 100%;
  padding: 5px; 
  border: 1px solid ${COLORS.ACCENT};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
  }
`;

export const DateRange = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;