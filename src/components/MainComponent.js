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
      leaders: state.leaders,
      comments: state.comments,
      promotions: state.promotions
    }
}

class Main extends Component {

  render() {

  const DishWithId = ({match}) => {
    return(
      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    )
  }

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={() => <Home dish={this.props.dishes.filter((dish) => dish.featured )[0]} 
                promotion={this.props.promotions.filter((promo) => promo.featured )[0]} 
                leader={this.props.leaders.filter((leader) => leader.featured )[0]} />}/>
                <Route exact path="/menu" component={() => <Menu dishesss={this.props.dishes} />}/>
                <Route  path="/menu/:dishId" component={DishWithId}/>
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
                <Route exact path="/contactus" component={() => <Contact/>}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

