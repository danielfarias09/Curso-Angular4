import {
   Component, 
   OnInit,
   OnChanges, 
   OnDestroy, 
   DoCheck, 
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

//É boa prática declarar as interfaces de ciclo de vida que estão sendo utilizadas
export class CicloComponent implements OnInit, OnChanges, 
OnDestroy, DoCheck, AfterContentInit,AfterContentChecked,
AfterViewInit, AfterViewChecked {

//@Input expõe esta variavel para outros módulos
  @Input() valorInicial: number = 10;

  constructor() { 
    this.log("Construtor");
  }

//Abrir o console do navegador para ver as mudanças
  ngOnInit() {
    this.log("ngOnInit");
  }

  ngOnChanges(){
    this.log("ngOnChanges");
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }

  ngAfterContentInit(){
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
  }

  private log(msg: string){
    console.log(msg);
  }

}
