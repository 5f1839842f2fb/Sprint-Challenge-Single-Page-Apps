import React, { useState, useEffect} from 'react';
import Reactstrap, { Card, CardText, CardTitle, CardHeader, CardBody } from 'reactstrap';
import Axios from "axios";
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