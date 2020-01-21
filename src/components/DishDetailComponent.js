import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    render() {

        if (this.props.selectedD != null) {

            const comm = this.props.selectedD.comments.map((comment) => {
                return (
                    <div key={comment.id} className="mt-4">
                        <dd>{comment.comment}</dd>
                        <dd>--{comment.author}, {comment.date}</dd>
                    </div>
                )  
            }); 

            return (
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-5 m-3 p-0 ">
                        <Card onClick={() => console.log(this.props.selectedD)}>
                         
                            <CardImg src={this.props.selectedD.image} alt={this.props.selectedD.name}/>
                            <CardBody>
                                <h5>{this.props.selectedD.name}</h5>
                                <CardText>{this.props.selectedD.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-5 m-3 p-0 ">   
                        <dl className="m-3">
                            <dt className="mt-3">Comments</dt>
                            {comm}
                        </dl>
                    </div> 
                </div>
            )
        } else {
            return (<div></div>);
            }
    }


}

export default DishDetail;

/*
<Card>
<CardImg width="100%" src={this.props.selectedD.image} alt={this.props.selectedD.name}/>
<CardBody>
    <CardTitle>{this.props.selectedD.name}</CardTitle>
    <CardText>{this.props.selectedD.description}</CardText>
</CardBody>
</Card>
*/

/*<dd>{comment.comment}</dd>
  <dd>--{comment.author}, {comment.date}</dd>*/

 /* const comm = this.props.selectedD.comments.map((comment) => {
    return ( <div> </div> );*/ 