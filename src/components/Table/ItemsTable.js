import React from "react";
import axios from "axios";
import MyTable from "./MyTable";
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
            size: 10
        };
        this.goNextPage = this.goNextPage.bind(this);
        this.goPreviousPage = this.goPreviousPage.bind(this);
    }

    loadItems(page, size, sort) {
        axios.get('http://localhost:8080/item/all-items?' +
            'page=' + page +
            '&size='+ size +
            '&sort='+ sort)
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

    componentDidMount() {
        this.loadItems(this.state.number, this.state.size, "id");
    }

    goNextPage(){
        this.loadItems(this.state.number + 1,  this.state.size, "id");
    }

    goPreviousPage(){
        this.loadItems(this.state.number - 1,  this.state.size, "id");
    }

    renderTable(){
        return (
            <Container>
                <MyTable
                    empty={this.state.empty}
                    items={this.state.items}
                    first={this.state.first}
                    last={this.state.last}
                    totalPages={this.state.totalPages}
                    currentPage={this.state.number}
                    goNextPage={this.goNextPage}
                    goPreviousPage={this.goPreviousPage}
                />
            </Container>)

    }

    render() {
        return(this.renderTable())
    }

}