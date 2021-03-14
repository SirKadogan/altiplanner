import React from 'react';

import {Container} from './styles';

interface ProgressbarProps {
  progress: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({progress}) => {
  return (
    <Container progress={progress}/>
  )
}

export default Progressbar;