import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

const Menu = ({dishesss, onClick}) => {
    const menu = dishesss.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-3 p-0">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3> Menu</h3>
                <hr/>
            </div>
            <div className="row justify-content-center">
                {menu}
            </div>
        </div>
    );
}

function RenderMenuItem({dish, onClick}) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

export default Menu;
