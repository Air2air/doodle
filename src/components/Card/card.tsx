import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  background-color: lightgray;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardTitle>This is a card</CardTitle>
        <CardBody>
          This is the body of the card.
        </CardBody>
      </Card>
    );
  }
}

export default CardComponent;
