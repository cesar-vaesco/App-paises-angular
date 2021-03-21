import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [],
})
export class PorPaisComponent {

    //   Vinculando la propiedad termino a la vista a través de ngModel
    termino: string = '';
    hayError: boolean = false;
    paises:Country[] =[];

    constructor(private paisService: PaisService) { }


    //   Acción que se genera al enviar el formulario
    buscar( termino: string) {
        this.hayError = false;
        this.termino = termino;
        // console.log(this.termino);

        this.paisService.buscarPais(termino)
            .subscribe((paises) => {
                console.log(paises);
                this.paises = paises;
            }, (err) => {
                // console.log('Error');
                // console.info(err);
                this.hayError = true;
                this.paises = [];
            });
    }

    sugerencias( termino:string ){
        this.hayError = false;
        //TODO: crear sugerencias
    }
}
