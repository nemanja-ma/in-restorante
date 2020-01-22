import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const Menu = ({dishesss, onClick}) => {
    const menu = dishesss.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-3 p-0">
                <RenderMenuItem dish={dish} onClick={onClick}/>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row justify-content-center">
                {menu}
            </div>
        </div>
    );
}

function RenderMenuItem({dish, onClick}) {
    return(
        <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default Menu;
