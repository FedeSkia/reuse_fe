import React from "react";

export default class Item extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
            </tr>
        );
    }

}