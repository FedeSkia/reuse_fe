import * as React from "react";
import {Button, Col, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
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
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div onClick={this.openLoginModal}>
                        <span>
                            Login
                        </span>
                        <Image className={"login-img"} src="login-image.png" fluid  />
                    </div>
                </Navbar.Collapse>
                {this.renderLoginModal()}
            </Navbar>)
    }
}