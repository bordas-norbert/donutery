import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselItems;

  constructor(service: HomeService){
    this.carouselItems = service.getCarouselElements();
  }
}
