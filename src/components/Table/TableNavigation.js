import React from "react";


export default class TableNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            possiblePageSize: [5, 10, 20]
        };
        this.handleChangePageSize = this.handleChangePageSize.bind(this);
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

    handleChangePageSize(event) {
        this.props.changePageSize(event.target.value);
    }

    numberOfElements() {
        return (
            <div>
                Numero elementi
                <select value={this.props.size} onChange={this.handleChangePageSize}>
                    {this.state.possiblePageSize.map((value) => {
                        return (<option key={value} value={value}>{value}</option>);
                    })}
                </select>
            </div>);
    }

    render() {
        return (
            <nav>
                <ul className="pagination">
                    {this.renderGoBackButton()}
                    <li className="page-item">
                        <a className="page-link" href="#">{this.props.currentPage}</a>
                    </li>
                    {this.renderNextButton()}
                    {this.numberOfElements()}
                </ul>
            </nav>
        );
    }

}
