import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';


@observer
class App extends Component {
  //other Methods
  render() {
    return (
      <div className="App">
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
        {this.props.store.list.map((i,ind) => <Item item = {i} 
                                                    key = {ind}
                                                    store = {this.props.store}/>
          )}
      </div>
    );
  }
}

export default App;
