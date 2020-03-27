import {Component} from "@angular/core";

@Component({
  selector : "calculadora-component",
  templateUrl : "./calculadora.component.html",
  styleUrls : ["./calculadora.component.css"]
})

export class CalculadoraComponent{

    num1 : number =0;
    num2 : number =0;
    num3 : number =0;
    num4 : number =0;
    num5 : number =0;
    num6 : number =0;
    num7 : number =0;
    num8 : number =0;

    calcular() : number {
      let total = 0;
      total = this.num1 +this.num2;
      return total;
    }

    subtrair() : number{
      let total = 0;
      total = this.num3 - this.num4;
      return total;

    }

    multiplicar() : number{
      let total = 0;
      total = this.num5 * this.num6;
      return total;

    }

    dividir() : number{
      let total = 0;
      total = this.num7 / this.num8;
      return total;

    }

    calcularSoma() : void{
      alert("A soma é " + this.calcular())
    }
    calcularSubtracao() : void{
      alert("A Subtração é " + this.subtrair())
    }
    calcularMultiplicacao() : void{
      alert("A Multiplicação é " + this.multiplicar())
    }
    calcularDivisao() : void{
      alert("A Divisão é " + this.dividir())
    }


  }
