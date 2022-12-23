import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cardItems = [
    { "id" : 1, "title": 'Chocolate glazed donut', "description": "If you are craving for something tasty...", "toolTip":""},
    { "id" : 2, "title": 'Salted caramel glaze...', "description": "Salty on top, sweet in the inside...", "toolTip":"Salty caramel glazed donut"},
    { "id" : 3, "title": 'Frosty donut', "description": "Mint sugar topping with blueberry filling.", "toolTip":""},
  ]
}
