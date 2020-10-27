import { observable, action, computed } from "mobx";

export default class MarketStore {

    @observable selectedItems = []

    constructor(root) {
        this.root=root;
    }

    @action // add
    put = (name, price) => {

        const {number} = this.root.counter;

        // finding
        const exists = this.selectedItems.find(item => item.name === name);

        if (!exists) {
            // have not
            this.selectedItems.push({
               name, price, count:number,
            });
            return;
        }
        exists.count+=number;
    }

    @action // drop remove
    take = name => {
        const itemToTake = this.selectedItems.find(item => item.name === name);
        itemToTake.count--;
        if(itemToTake.count === 0) {
            this.selectedItems.remove(itemToTake);
        }
    };

    @computed // total counting
    get total() {
        console.log('total computed');
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
            },0);
    }


}