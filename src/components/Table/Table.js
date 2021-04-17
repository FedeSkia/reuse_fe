import React from "react";
import Item from "./Item";
import {Container} from "react-bootstrap";
import TableNavigation from "./TableNavigation";


export default class Table extends React.Component {

    renderHeaders() {
        if (this.props.items) {
            const headers = this.createHeaders();
            return (
                <thead>
                    <tr id={1}>
                        {headers}
                    </tr>
                </thead>)
        }
    }

    createHeaders() {
        return ["Nome", "Descrizione"].map((header, index) => {
            return (<th key={index}>{header}</th>);
        });
    }

    getItems() {
        if (this.props.items) {
            return this.props.items.map(item =>
                <Item key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                />
            );
        } else {
            return "No Items found";
        }
    }

    renderTableIfDataExists() {
        if (this.props.empty) {
            return (
                <Container>
                    Nessun elemento trovato
                </Container>);
        } else {
            return (
                <Container>
                    <table>
                        {this.renderHeaders()}
                        <tbody>
                        {this.getItems()}
                        </tbody>
                    </table>
                    <TableNavigation
                        first={this.props.first}
                        last={this.props.last}
                        currentPage={this.props.currentPage}
                        goNextPage={this.props.goNextPage}
                    />
                </Container>);
        }
    }

    render() {
        return (
            this.renderTableIfDataExists()
        )
    }
}