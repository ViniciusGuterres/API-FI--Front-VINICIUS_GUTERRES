import { FilmesModel } from './../model/filmesModel';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from './../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilmeService extends BaseService<FilmesModel> {

    private loginSubject = new Subject<boolean>();

    constructor(public override http: HttpService) {
        super('filmes', http);
    }
}
