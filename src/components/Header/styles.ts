import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Header = styled.div`
  width: 100vw;
  padding: 10px;
  background-color: ${COLORS.ACCENT};
  background: rgb(117,230,218);
  background: linear-gradient(90deg, rgba(117,230,218,1) 0%, rgba(173,252,244,1) 100%);
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  padding-left: 25px;

  @media (max-width:480px) {
    padding-left: 10px;
  }
  
`;