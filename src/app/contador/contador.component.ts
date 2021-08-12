

import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
<h3>La Base Es: <strong>{{base}}</strong></h3>
<button (click)= "acumular (base)"> + {{base}} </button>
<span>{{Numero}} </span>
<button (click)= "acumular (-base)"> - {{base}} </button>
    ` 
})
export class contadorcomponet {
    titulo: string ='Contador App';
  Numero: number = 10;
  base: number=5;

  acumular (valor:number) {
    this.Numero += valor;
  }
  
}