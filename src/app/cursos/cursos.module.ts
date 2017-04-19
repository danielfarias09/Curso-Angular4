import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosComponent} from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports:[ //indica que queremos que cursos componente seja exposto para outros módulos 
    CursosComponent 
  ]
})
export class CursosModule { }
