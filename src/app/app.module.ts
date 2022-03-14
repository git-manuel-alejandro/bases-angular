import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './contador/contador.module';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/herore.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
    
  ],
  imports: [
    BrowserModule, 
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
