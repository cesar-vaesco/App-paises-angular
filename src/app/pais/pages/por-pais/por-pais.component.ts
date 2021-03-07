import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  constructor() {}

//   Vinculando la propiedad termino a la vista a través de ngModel
  termino: string = '';

//   Acción que se genera al enviar el formulario
  buscar() {
    console.log(this.termino);
  }
}
