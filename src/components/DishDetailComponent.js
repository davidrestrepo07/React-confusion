import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderDish = (Actual) => {
    if (Actual != null) {
      return (
        <Card>
          <CardImg top src={Actual.image} alt={Actual.name} />
          <CardBody>
            <CardTitle>{Actual.name}</CardTitle>
            <CardText>{Actual.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  };

  renderComments = (comments) => {
    return comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, {comment.date}
          </p>
        </li>
      );
    });
  };

  render() {
    const dish = this.props.selectedDish;

    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
              {this.renderDish(dish)}
              </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {this.renderComments(dish.comments)}
                </ul>
          </div>
        </div>
      );
    } else {
      return (
      <div></div>
      );
    }
  }
}

export default Dishdetail;