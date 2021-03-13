import React from "react";

import { Header } from './styles';

//Assets
import logo_plane from '../../assets/logo_plane.png'

const CustomHeader = () => {
  return (
    <Header>
      <img src={logo_plane} alt="logo" height="50px"/>
    </Header>
  );
};

export default CustomHeader;
