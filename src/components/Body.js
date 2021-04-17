import React from "react";
import {Container} from "react-bootstrap";
import ItemsTable from "./ItemsTable";

export default class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Container>
                <ItemsTable/>
            </Container>);
    }

}