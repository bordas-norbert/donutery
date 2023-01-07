import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    getCarouselElements(){
      return [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
    ]
  }
}
