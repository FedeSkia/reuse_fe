import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export default class TableNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            selectedPage: props.currentPage
        };
    }

    renderGoBackButton() {
        return <li
            onClick={() => this.canGoPreviousPage()}
            className={`page-item ${this.props.first ? "disabled" : ""}`}>
            <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </a>
        </li>;
    }

    renderNextButton() {
        return <li
            onClick={() => this.canGoNextPage()}
            className={`page-item ${this.props.last ? "disabled" : ""}`}>
            <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </a>
        </li>;
    }

    canGoNextPage() {
        if (!this.props.last)
            this.props.goNextPage()
    }

    canGoPreviousPage() {
        if (!this.props.first)
            this.props.goPreviousPage()
    }

    goToPage(event){
        if(event.key === 'Enter')
            this.props.goToPage(event.target.value);
    }

    render() {
        return (
            <nav>
                <Container>
                    <Row>
                        <Col>
                            <ul className="pagination">
                                {this.renderGoBackButton()}
                                <li className="page-item">
                                    <a className="page-link" href="#">{this.props.currentPage}</a>
                                </li>
                                {this.renderNextButton()}
                            </ul>
                        </Col>
                        <Col>
                            <input className="form-control form-control-sm"
                                   type="number"
                                   placeholder="Naviga alla pagina"
                                   onKeyPress={(e) => this.goToPage(e)}/>
                        </Col>
                    </Row>
                </Container>
            </nav>
        );
    }


}
