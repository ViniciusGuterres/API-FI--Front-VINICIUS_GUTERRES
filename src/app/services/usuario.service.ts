import { UsuarioModel } from './../model/usuarioModel';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from './../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<UsuarioModel> {

  private loginSubject = new Subject<boolean>();

  constructor(public override http: HttpService) {
    super('users', http);
  }

  login(email: string, password: string): Promise<IResultHttp> {
    return this.http.post(`${environment.url_api}/users/auth`, { email, password });
  }
/*
  configureLogin(o): void {
    const { token, user } = o.data;
    localStorage.setItem('faind:token', token);
    localStorage.setItem('faind:user', JSON.stringify(user));
    this.loginSubject.next(this.isStaticLogged);
  }

  get isLogged(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }
  
  
  get isStaticLogged(): boolean {
    return !!localStorage.getItem('faind:token');
  }

  static get token(): string {
    return localStorage.getItem('faind:token');
  }
  */
}
