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

    @action editItem = (itemName, newLocation) => {
        console.log("J")
        console.log(itemName)
        console.log(newLocation)

        let itemToEdit = this.list.find(l => l.name == itemName)
        itemToEdit.location = newLocation

    }

    @action deleteItem = (itemName) => {
        let index = this.list.findIndex(l => l.name == itemName)
        console.log(index)
        this.list.splice(index, 1)

    }

}

