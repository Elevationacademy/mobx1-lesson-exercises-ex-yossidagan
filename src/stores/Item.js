import { observable, action } from 'mobx';

export class Item {

    @observable name
    @observable completed = false

    constructor(newName) {
        this.name = newName
    }


    checkItem = () => {
        //your code here
    }
    editItem = () => {
        //your code here
    }
    deleteItem = () => {
        //your code here
    }
}