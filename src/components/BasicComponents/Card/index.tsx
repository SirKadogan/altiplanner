import React from 'react';

import { Card, Header } from './styles';

interface ComponentProps {
  Body: React.FC,
  Header: React.FC,
}

type CardComponentProps = React.FC & ComponentProps;

const CardComponent: CardComponentProps = ({children})=> (
    <Card>
      {children}
    </Card>
)

const CardBodyComponent: React.FC = ({children}) => (
 <span>foo</span>
)

const CardHeaderComponent: React.FC = ({children}) => (
  <Header>{children}</Header>
)

CardComponent.Body = CardBodyComponent;
CardComponent.Header = CardHeaderComponent;

export default CardComponent;