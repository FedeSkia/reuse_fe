import React from "react";
import Item from "./Item";


export default class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    getItems() {
        if(this.props.items){
            const items = this.props.items.map(item =>
                <Item key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                />
            );
            return items;
        } else {
            return "No Items found";
        }
    }

    render() {
        const items = this.getItems();
        return (
            <>
                {items}
            </>
        )
    }

}