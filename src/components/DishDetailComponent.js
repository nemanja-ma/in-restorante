/*import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {

    render() {

        if (this.props.selectedD != null) {

            const comm = this.props.selectedD.comments.map((comment) => {
                return (
                    <div key={comment.id} className="mt-4">
                        <dd>{comment.comment}</dd>
                        <dd>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</dd>
                    </div>
                )  
            }); 

            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 m-3 p-0 ">
                            <Card onClick={() => console.log(this.props.selectedD)}>
                                
                                <CardImg src={this.props.selectedD.image} alt={this.props.selectedD.name}/>
                                <CardBody>
                                    <h5>{this.props.selectedD.name}</h5>
                                    <CardText>{this.props.selectedD.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-3 p-0 ">   
                            <dl className="m-3">
                                <dt className="mt-3">Comments</dt>
                                {comm}
                            </dl>
                        </div> 
                    </div>
                </div>
            )
        } else {
            return (<div></div>);
            }
    }
}

export default DishDetail;*/

import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function DishDetail({selectedD}) {

    if (selectedD != null) {

        const comm = selectedD.comments.map((comment) => {
            return (
                <div key={comment.id} className="mt-4">
                    <dd>{comment.comment}</dd>
                    <dd>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</dd>
                </div>
            )  
        }); 
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 m-3 p-0 ">
                        <Card>
                            <CardImg src={selectedD.image} alt={selectedD.name}/>
                            <CardBody>
                                <h5>{selectedD.name}</h5>
                                <CardText>{selectedD.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-3 p-0 ">   
                        <dl className="m-3">
                            <dt className="mt-3">Comments</dt>
                            {comm}
                        </dl>
                    </div> 
                </div>
            </div>
        )
    } else {
        return (<div></div>);
        }    
}

export default DishDetail;