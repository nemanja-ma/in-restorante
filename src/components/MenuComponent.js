import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent'

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        console.log(this.state);
    }
    
    
    render() {
        const menu = this.props.dishesss.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-3 p-0">
                    <Card onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {menu}
                </div>
                <div>
                    <DishDetail selectedD={this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}

export default Menu;

//{this.renderDish(this.state.selectedDish)}}

/*enderDish(dish) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (<div></div>);
        }
}*/