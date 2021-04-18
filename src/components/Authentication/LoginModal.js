import React from "react";
import {Button, Container, Form, Modal} from "react-bootstrap";
import axios from "axios";


export default class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            successfulLogin: undefined
        }
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        const loginFormData = new FormData();
        loginFormData.append('username', this.state.username);
        loginFormData.append('password', this.state.password);
        axios.post('http://localhost:8080/login', loginFormData)
            .then(response => {
                if (response.status === 200) {
                    this.setState({successfulLogin: true});
                }
            })
            .catch((error) => {
                if (error.response) {
                    this.setState({successfulLogin: false});
                }
            });
    }

    canSubmitLoginRequest(){
        return !(this.state.username !== '' && this.state.password !== '');
    }

    loginFailed() {
        if(this.state.successfulLogin === false)
            return (
                <Container className={"container-alert"}>
                    Ci dispiace non risulti essere un utente registrato. Vuoi registrarti?
                </Container>
            );
    }

    render() {
        return (
            <Modal show={true} onHide={this.props.closeLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.loginFailed()}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Inserisci email"
                                          onChange={event => {
                                              this.setState({username: event.target.value})
                                          }}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          onChange={event => {
                                              this.setState({password: event.target.value})
                                          }}/>
                        </Form.Group>
                        <Button variant="primary"
                                disabled={this.canSubmitLoginRequest()}
                                onClick={this.loginUser}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }


}