import { Component } from '@angular/core';
import { Country } from 'src/app/pais/interfaces/pais.interface';
import { PaisService } from 'src/app/pais/services/pais.service';

/**
 *
 * The class 'PorPaisComponent' is listed in the declarations of the NgModule 'PaisModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.
 */

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [`

        li{
        cursor: pointer;
    }`
    ],
})
export class PorPaisComponent {

    //   Vinculando la propiedad termino a la vista a través de ngModel
    termino: string = '';
    hayError: boolean = false;
    paises:Country[] =[];

    paisesSugeridos:Country[] =[];
    mostrarSugerencias: boolean = false;

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

    sugerencias(termino: string) {
        this.hayError = false;
        this.termino = termino;
        this.mostrarSugerencias = true;

        this.paisService.buscarPais(termino)
            .subscribe(
                paises => this.paisesSugeridos = paises.splice(0, 5),
                (err) => this.paisesSugeridos = []
            );
    }

    buscarSugerido(termino: string) {
        this.buscar(termino);

    }

}
