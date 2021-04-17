import React from "react";
import axios from "axios";
import Table from "./Table";
import {Container} from "react-bootstrap";

export default class ItemsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            empty: false,
            first: true,
            last: true,
            number: 0,
            numberOfElements: 0,
            pageable: null,
            totalElements: 0,
            totalPages: 0,
            size: 0
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/item/all-items?page=0&size=10&sort=id')
            .then(response => {
                let data = response.data;
                this.setState({
                    items: data.content,
                    empty: data.empty,
                    first: data.first,
                    last: data.last,
                    number: data.number,
                    numberOfElements: data.number,
                    pageable: data.pageable,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages,
                    size: data.size
                })});
    }

    renderTable(){
        if(this.state.empty){
            return(
                <Container>
                    Non vi sono elementi
                </Container>)
        } else {
            return (
                <Container>
                    <Table
                        empty={this.state.empty}
                        items={this.state.items}
                    />
                </Container>)
        }
    }

    render() {
        return(this.renderTable())

    }

}