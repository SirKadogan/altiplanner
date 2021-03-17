import styled from "styled-components";

import COLORS from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;

  svg {
    color: ${COLORS.SUPPORT};
    cursor: pointer;
    font-size: 22px;

    &:hover {
      color: ${COLORS.DARK};
    }
  }
`;

export const WeekContainer = styled.div`
  display: flex;
  flex: 1;
`;
