import styled from "styled-components";

import COLORS from '../../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  svg {
    color: ${COLORS.SUPPORT};
    cursor: pointer;
    
    &:hover {
      color: ${COLORS.DARK};
    }
  }

  span {
    margin-right: 5px;
    margin-left: 5px;
  
  }
`;
