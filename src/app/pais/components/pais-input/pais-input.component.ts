import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {

    termino:string = '';
    buscar(){
        console.log(this.termino);
        console.log('Hola mundo..')
    }

}
