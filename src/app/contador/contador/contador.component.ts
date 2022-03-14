import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string = 'Contador';
  numero:number = 0
  base:number = 2

acumular(valor:number){
  this.numero += valor
}

}
