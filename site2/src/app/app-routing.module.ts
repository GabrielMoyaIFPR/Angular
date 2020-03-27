import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWordComponent} from "./helloWord/helloword.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import{CalcularComponent} from "./imc/calcular/calcular.component";
import{ResultadoComponent} from "./imc/resultado/resultado.component";

const routes: Routes = [
  {path:"helloWord", component: HelloWordComponent},
  {path:"calculadora", component: CalculadoraComponent},
  {path:"imc", component:  CalcularComponent},
  {path:"resultado", component:  ResultadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
