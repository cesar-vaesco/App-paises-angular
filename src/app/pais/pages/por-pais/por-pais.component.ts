import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [],
})
export class PorPaisComponent {

    //   Vinculando la propiedad termino a la vista a través de ngModel
    termino: string = '';
    hayError: boolean = false;

    constructor(private PaisService: PaisService) { }


    //   Acción que se genera al enviar el formulario
    buscar() {
        this.hayError = false;
        console.log(this.termino);
        this.PaisService.buscarPais(this.termino)
            .subscribe((resp) => {
                console.log(resp);

            }, (err) => {
                console.log('Error');
                console.info(err);
                this.hayError = true;
            });
    }
}
