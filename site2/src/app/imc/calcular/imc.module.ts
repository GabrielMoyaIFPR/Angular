//Blibliotecas
import {NgModule} from "@angular/core";
import { FormsModule }   from '@angular/forms';
import {CalcularComponent} from "./calcular/calcular.component";

//Decorator
@NgModule({
//Metadados
  declarations:[CalcularComponent,],
  imports:[FormsModule],
  exports:[CalcularComponent]

})

//Exportando Classe
export class ImcModule{

}
