import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDishInfo({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ dish }) {
  if (dish != null) {
    const commentsGen = dish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <li>{comment.comment}</li>
          <br />
          <li>
            -- {comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </li>
          <br />
        </div>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
            <CardText>
              <ul className="list-unstyled">{commentsGen}</ul>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishdetailComponent = (props) => {
  return (
    <div className="container">
      <div className="row">
        {console.log(props.dish)}
        <RenderDishInfo dish={props.dish} />
        <RenderComments dish={props.dish} />
      </div>
    </div>
  );
};

export default DishdetailComponent;
