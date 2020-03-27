//Blibliotecas
import {Component} from "@angular/core";

//Decorator
@Component({
  //Metadados
  selector : "calcular-component",
  templateUrl : "./calcular.component.html",
  styleUrls : ["./calcular.component.css"]
})

//Exportando classe
export class CalcularComponent{
  altura : number =0;
  peso : number =0;

  //metodo
  calcularIMC() : number{
    let resultado = 0;
    resultado = this.peso / this.altura**2;
    return resultado;
  }
  //metodo
  calcularIMCFinal() : void{
    alert("Seu IMC é " + this.calcularIMC())
  }
}
