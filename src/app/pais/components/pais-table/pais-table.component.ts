import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-pais-table',
    templateUrl: './pais-table.component.html',
    styleUrls: ['./pais-table.component.css']
})


export class PaisTableComponent  {

    @Input() paises: Country[] = [];

    termino: string = '';
    hayError: boolean = false;


    constructor(private PaisService: PaisService) { }


    //   Acción que se genera al enviar el formulario
    buscar() {
        this.hayError = false;
        console.log(this.termino);
        this.PaisService.buscarPais(this.termino)
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
}
