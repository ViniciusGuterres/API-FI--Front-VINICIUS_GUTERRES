import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { UsuarioModel } from '../../model/usuarioModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IUsuario } from '../../interfaces/IUsuario'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  model: UsuarioModel = new UsuarioModel();

  constructor(
    private userSrv: UsuarioService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.userSrv.GetById(id);
    const { data } = result.data;

    const {
      name,
      access_level,
      birth_date,
      office_role,
      sector
    } = data[0];

    // formatting date
    const jsDate = new Date(birth_date);
    const dateFormatted = jsDate.toLocaleString("pt-br")
    const fullDate = dateFormatted.substring(0, 10);

    const objectReturn = {
      name,
      birth_date: fullDate,
      access_level,
      sector,
      office_role
    };

    this.model = objectReturn as UsuarioModel;
  }

  async save(): Promise<void> {
    const result = await this.userSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/usuarios');
    }
  }
}
