import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes : Personaje[] = [
    {
      nombre : 'Goku',
      poder: 15000
    },
    {
      nombre : 'Gohan',
      poder: 9000
    },
    {
      nombre : 'Vegeta',
      poder: 12000
    },
  ]

  nuevo:Personaje = {
    nombre : '',
    poder : 0
  }

  agregar(){
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre  : '',
      poder : 0
    }
    return
    
  }

}
