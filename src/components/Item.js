import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {

    editItem = () => {
        let newLocation = prompt("The new location...")
        this.props.store.editItem(this.props.item.name, newLocation)
    }

    deleteItem = () => {
        
        this.props.store.deleteItem(this.props.item.name)
    }

    render() {
        let item = this.props.item
        console.log(item.name)
        return (
            <div>
                <div className={item.completed ? "crossed" : null}>
                    <input type="checkbox"
                        value={item.name} />
                    {item.name} {item.location}
                </div>
                <button className="editButton" onClick={this.editItem}>Edit</button>
                <button className="deleteButton" onClick={this.deleteItem}>Delete</button></div>
                
        )

    }
}

export default Item