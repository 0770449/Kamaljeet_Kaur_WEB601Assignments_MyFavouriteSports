
import { Content } from "./content-interface";

export class ContentList {

    // initialization
    static contentCount = 0;
  
    private _items:  Content[]; //private array of type Content
    
    constructor(){
        this._items = [];
    }

   /* increaseCount(){
        return ++ContentList.contentCount;
    }*/

    // usage of getter function 
    getContent(): Content[] {
        return this._items;
    }

    //  add a content item to the end of the array
    public add(item: Content): void {
        this._items.push(item);
    }
    // length of an array
    count(): number {
        return this._items.length;
    }
    
    
    displayAtIndex(index: number) {
        if (index < 0 || index >= this._items.length) {
            alert("Invalid index");
        }
        
        const item = this._items[index];
        return `<h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>By ${item.creator}</p>
                <img src="${item.imgURL}" alt="${item.title}">
                <p>Type: ${item.type}</p>`;
    }
}