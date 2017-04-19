import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  //Através da annotation @Input, expomos o atributo nome para o seletor app-curso
  //Se o nome da variável for o mesmo que vai ser exposto internamente, não precisamos do 'nome' como argumento da annotation
  @Input('nome') nomeCurso: string = "";

  constructor() { }

  ngOnInit() {
  }

}
