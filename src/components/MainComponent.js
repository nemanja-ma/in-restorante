import React, {Component} from 'react';
import Menu from './MenuComponent'; 
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent'


class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS
    };
  }

  render() {

    const HomePage = () => {
        return(
            <Home/>
        )
    }
    const ContactUs = () => {
      return(
          <Contact/>
      )
  }
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishesss={this.state.dishes}/>} />
                <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>} />
                <Route exact path="/contactus" component={ContactUs}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default Main;

