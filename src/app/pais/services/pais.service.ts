import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
    providedIn: 'root',
})
export class PaisService {
    // Guardando la url que se mantendra estatica
    private apiUrl: string = 'https://restcountries.eu/rest/v2';

    constructor(private http: HttpClient) { }

    //   Construyendo la url por término d e búsqueda
    buscarPais(termino: string): Observable<Country[]> {

        const url = `${this.apiUrl}/name/${termino}`;
        return this.http.get<Country[]>(url);
    }

    buscarCapital(termino: string): Observable<Country[]>{

        const url = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Country[]>(url);
    }

    getPaisPorAlpha(id: string): Observable<Country>{
        const url = `${this.apiUrl}/alpha/${id}`;
        return this.http.get<Country>(url);

    }
}
