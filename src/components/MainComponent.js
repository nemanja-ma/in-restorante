import React, {Component} from 'react';
import Menu from './MenuComponent'; 
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      leaders: state.leaders
    }
}

class Main extends Component {
  constructor(props) {
    super(props);
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
                <Route exact path="/menu" component={() => <Menu dishesss={this.props.dishes}/>} />
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                <Route exact path="/contactus" component={ContactUs}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

