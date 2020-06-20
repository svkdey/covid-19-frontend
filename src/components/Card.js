import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

export default function CustomCard(props) {
  return (
    <div className="card-wrapper">
      <Card className="card-w">
        <CardImg top width="100%" src={props.data.image} alt="Card image cap" />
        <CardBody className="card-main">
          <CardTitle>
            <strong>{props.data.title}</strong>
          </CardTitle>
          <CardText>
            <small>{props.data.description} </small>
          </CardText>
          <CardText>
            <Button outline color="danger">
              <a href={props.data.url}>Read Full content</a>
            </Button>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
