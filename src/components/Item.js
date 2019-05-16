import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    //other Methods
    render() {
        let item = this.props.item
        console.log(item.name)
        return (
            <div className = {item.completed ? "crossed": null}>
            <input type="checkbox"
                value={item.name}/> 
                {item.name} 
            </div>)
    }
}

export default Item