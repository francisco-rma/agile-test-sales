import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SalesResponse } from './sales.response';
import { environment } from './environment';

@Injectable({
    providedIn: 'root'
})
export class SalesService {

    constructor(private router: Router, private httpClient: HttpClient) {

    }
    public getSales(): Observable<SalesResponse> {

        let uri = 'Sales'

        return this.httpClient.get<SalesResponse>(environment.urlApiSales + uri, this.addHeader())
            .pipe(
                catchError(this.handleError)
            )
    }

    addHeader() {
        let headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': ''
        }

        let requestOptions = {
            headers: new HttpHeaders(headerDict),
        };

        return requestOptions;
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
            return throwError(() => new Error(errorMessage));
        }

        if (error.status == 0) {
            errorMessage = `Você esta sem conexão com a internet no momento.`;
            return throwError(() => new Error(errorMessage));
        }

        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;

        if (error.status == 401) {
            //Não autorizado, aplicar devidas medidas
        }

        return throwError(() => new Error(errorMessage));
    };

}
