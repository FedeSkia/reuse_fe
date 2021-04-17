import * as React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";


export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>
                        <Image src="login.png" fluid  />
                    </Col>
                </Row>
            </Container>);
    }
}