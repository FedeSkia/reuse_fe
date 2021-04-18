import * as React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import LoginModal from "./Authentication/LoginModal";


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
    }

    openLoginModal(){
        this.setState({showModal: true});
    }

    closeLoginModal(){
        this.setState({showModal: false});
    }

    renderLoginModal(){
        if(this.state.showModal){
            return(
                <LoginModal
                    closeLoginModal={this.closeLoginModal}
                />);
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>
                        <Image onClick={this.openLoginModal} src="login.png" fluid  />
                    </Col>
                </Row>
                {this.renderLoginModal()}
            </Container>);
    }
}