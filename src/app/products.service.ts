import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  getCardItems(){
    return [
        { "id" : 1, "title": 'Chocolate glazed donut', "description": "If you are craving for something tasty...", "toolTip":""},
        { "id" : 2, "title": 'Salted caramel glaze...', "description": "Salty on top, sweet in the inside...", "toolTip":"Salty caramel glazed donut"},
        { "id" : 3, "title": 'Frosty donut', "description": "Mint sugar topping with blueberry filling.", "toolTip":""},
        { "id" : 4, "title": "Strawberry donut", "description":"Strawberry flavored topping with same flavored filling.", "toolTip":""},
        { "id" : 5, "title": 'Chewy donut', "description":'Chewy banana dough with walnut flavored icing!', "toolTip":""}
    ];
  }
}
