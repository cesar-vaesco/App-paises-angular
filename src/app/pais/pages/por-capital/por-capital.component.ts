import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

    //   Vinculando la propiedad termino a la vista a través de ngModel
    termino: string = '';
    hayError: boolean = false;
    paises: Country[] = [];

    constructor(private PaisService: PaisService) { }


    //   Acción que se genera al enviar el formulario
    buscar(termino: string) {
        this.hayError = false;
        this.termino = termino;
        // console.log(this.termino);

        this.PaisService.buscarCapital(termino)
            .subscribe((paises) => {
                this.paises = paises;
            }, (err) => {
                // console.log('Error');
                // console.info(err);
                this.hayError = true;
                this.paises = [];
            });
    }


}
