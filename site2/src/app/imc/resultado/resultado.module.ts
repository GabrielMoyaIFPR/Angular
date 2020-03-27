//Blibliotecas
import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import { FormsModule }   from '@angular/forms';
import {ResultadoComponent} from "./resultado/resultado.component";
import {ImcModule} from "./imc.module";

const routes: Routes = [
  { path: 'calcular', loadChildren: './calcular/calcular.component'  }
];

//Decorator
@NgModule({
//Metadados
  declarations:[ResultadoComponent],
  imports:[FormsModule,ImcModule,],
  exports:[ResultadoComponent]

})

//Exportando Classe
export class ResultadoModule{

}
