import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module'

import  {ImcModule} from "./imc/imc.module";
import  {ResultadoModule} from "./imc/resultado.module";
import{CalculadoraComponent} from "./calculadora/calculadora.component";
import{HelloWordComponent} from "./helloWord/helloword.component";
@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    CalculadoraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImcModule,
    ResultadoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
