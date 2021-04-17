import React from "react";
import Item from "./Item";


export default class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    renderHeaders(){
        if(this.props.items){
            const headers = this.createHeaders();
            return(
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
        if(this.props.items){
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

    render() {
        const items = this.getItems();
        const headers = this.renderHeaders();
        return (
            <table>
                {headers}
                <tbody>
                    {items}
                </tbody>
            </table>
        )
    }

}