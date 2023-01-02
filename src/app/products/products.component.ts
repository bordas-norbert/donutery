import { Component } from '@angular/core';
import { ProductsService } from '../products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cardItems;

  constructor(service: ProductsService){
      this.cardItems = service.getCardItems();
  }
}
