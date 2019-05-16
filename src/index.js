import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Item}  from './stores/Item'
import { ShoppingList } from './stores/ShoppingList'

let potatoes = new Item("Potatoes")
let corn = new Item("Corn")

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)
groceryList.list.push(corn)


// Use the prop store for your store
ReactDOM.render(<App store={groceryList} />, document.getElementById('root'));
registerServiceWorker();
