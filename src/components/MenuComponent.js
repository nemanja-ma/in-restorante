import React, {Component} from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthapizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'Unique combination of italian and indian cousine'
                }, 
                {
                    id: 1,
                    name: 'Zukinipagoda',
                    image: 'assets/images/FGPakora.jpg',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried kurac  kurac palac'
                }, 
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.jpg',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A contesencial confusion kurac palac'
                },
                {
                    id: 3,
                    name: 'ElaiChese cake',
                    image: 'assets/images/maxresdefault.jpg',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable seme-sweet cake with chese'
                }

            ]
        }
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left>
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                     <Media list>
                        {menu}
                     </Media>
                </div>
            </div>
        );
    }
}

export default Menu;