import { observable } from 'mobx'
import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    // other methods
    render() {
        let item = this.props.item
        return (
            <div> {item.name} </div>)
    }
}

export default Item