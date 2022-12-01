import { environment } from './../../environments/environment';
import { HttpService } from './../services/http.service';
import { IResultHttp } from '../interfaces/IResultHttp';

export abstract class BaseService<T> {

  urlBase: string = '';

  constructor(
    public url: string,
    public http: HttpService) {
    this.urlBase = `${environment.url_api}/${this.url}`;
  }

}