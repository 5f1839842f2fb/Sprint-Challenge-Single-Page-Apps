import React, { useState } from 'react';
import { Card, CardText, CardHeader, CardBody } from 'reactstrap';
const CharacterCard = props => {
  const [data, setData] = useState(props)

  return <Card>
    <CardHeader>{data.character.name}</CardHeader>
    <CardBody>
      <CardText>Status: {data.character.status}</CardText>
      <CardText>Species: {data.character.species}</CardText>
    </CardBody>
  </Card>
}

export default CharacterCard;