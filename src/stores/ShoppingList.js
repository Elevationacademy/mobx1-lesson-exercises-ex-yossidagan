import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;

    @action addItem = (newItem) => {
        console.log(newItem)
        this.list.push(new Item(newItem))
    }

    checkItem = () => {
        // your code here
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

