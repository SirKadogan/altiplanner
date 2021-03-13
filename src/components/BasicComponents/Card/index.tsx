import React from 'react';

import {Card} from './styles';

const CardComponent: React.FC = ({children}) => {
  return (
    <Card>
      {children}
    </Card>
  )

}

export default CardComponent;