import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent'; 
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent'


class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log(this.state.dishes);
    console.log(this.state.selectedDish);
    

    }

  render() {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishesss={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetail selectedD={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        </div>
    );
  }
}

export default Main;
