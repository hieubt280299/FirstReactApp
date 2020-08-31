import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments == null) return (<div></div>);
        else {
            const coms = comments.map((comment) => {
                return (
                    <li>{comment.comment}
                        <br />
                    -- {comment.author}, {comment.date}
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1 text-left">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {coms}
                    </ul>
                </div>
            );
        }
    }

    renderDish(dish) {
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
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;