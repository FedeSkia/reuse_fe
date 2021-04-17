import React from "react";
import axios from "axios";
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