import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['man', 'hulk', 'spyderman', 'superman']
  heroe_borrado: string = ''

  borrar(){
    this.heroe_borrado = this.heroes.pop() || ''
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
