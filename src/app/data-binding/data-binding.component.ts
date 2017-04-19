import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://facebook.com/danielfarias09";
  urlImagem: string = "http://lorempixel.com/400/200/cats/";
  textoDigitado: string;
  textoSalvo: string;
  mouseEmCima: boolean = false;
  nome: string = "abc";
  nomeDoCurso: string = "Android";
  pessoa: any = {
    nome: "",
    idade: "",
    endereco: {
      rua: "",
      numero:""
    }
  }

  constructor() { }

  getSoma(n1,n2){
    return n1 + n2;
  }

  botaoClicado(){
    alert("Botão Clicado!");
  }

  mostrarTextoDigitado(texto){
    this.textoDigitado = texto;
  }

  salvarTexto(texto){
    this.textoSalvo = texto;
  }

/**Quando o mouse está em cima, o valor se torna true, e quando tira, se torna falso */
  TiraEcolocaMouse(){
    this.mouseEmCima = !this.mouseEmCima;
  }

  ngOnInit() {
  }

}
