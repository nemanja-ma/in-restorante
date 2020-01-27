import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLenght = (len) => (val) => !(val) || (val.length <= len);
const minLenght = (len) => (val) => (val) && (val.length >= len);

 class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        })
    }
    
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        console.log(this.props.dishId, values.rating, values.author, values.comment);
        
        
    }
    
    render() {
        
        return (
            <>
                <div className="col-12 col-md-8">
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>  Submit Comment</Button>
                </div>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment                  
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select  model=".rating" id="rating" className="form-control">
                                        <option>1</option> 
                                        <option>2</option> 
                                        <option>3</option> 
                                        <option>4</option> 
                                        <option>5</option> 
                                        <option>6</option> 
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text className="form-control" model=".author" id="author" name="author" placeholder="Your Name" validators={{required, minLenght: minLenght(3), maxLenght: maxLenght(15)}}/>
                                    <Errors className="text-danger" model=".author" show="touched" messages={{ required: "Required", minLenght: "must be greater than 2 caracters", maxLenght: "must be less than 15 caracters"}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" className="form-control" id="comment" name="comment" rows="8"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default CommentForm;