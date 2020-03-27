import {Component} from "@angular/core";

@Component({
  selector : "HelloWord-component",
  templateUrl : "./helloword.component.html",
  styleUrls : ["./helloword.component.css"]
})

export class HelloWordComponent{
  nome : string = "";
  idade : number = 0;
  


  calcularIdade() : number {
    let total = 0;
    let anoAtual = new Date().getFullYear();
    total = anoAtual - this.idade;
    return total;
  }

  helloIdade() : void{

    alert("Sua idade é " + this.calcularIdade() + " anos")
  }

  hello() : void{
    alert("Hello Word " + this.nome)
  }


}
