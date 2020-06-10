import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  renderDishInfo(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {this.renderComments(dish)}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish) {
    if (dish.comments != null) {
      const comments = dish.comments.map((comment) => {
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
                <ul className="list-unstyled">{comments}</ul>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.selectedDish;

    return <div>{this.renderDishInfo(dish)}</div>;
  }
}

export default DishdetailComponent;
