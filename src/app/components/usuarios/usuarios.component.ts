import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { UsuarioModel } from '../../model/usuarioModel'
import { MatFormFieldModule } from '@angular/material/form-field';
import { IUsuario } from '../../interfaces/IUsuario'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {


  columns: string[] = ['id', 'name', 'birth_date', 'access_level', 'office_role', 'sector'];
  // origem dos dados
  dataSource!: MatTableDataSource<IUsuario>;


  constructor(private usuarioSrv: UsuarioService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const usuarios = await this.usuarioSrv.GetAll();
    const { data } = usuarios.data;

    const dataFormatted = data.map((user: any) => {
      // formatting date
      const birthDate = user.birth_date;
      const jsDate = new Date(birthDate);
      const dateFormatted = jsDate.toLocaleString("pt-br")
      const fullDate = dateFormatted.substring(0, 10);

      user.birth_date = fullDate;

      return user;
    });

    this.dataSource = new MatTableDataSource(dataFormatted);
  }


  async delete(usuario: UsuarioModel): Promise<void> {
    const result = await this.usuarioSrv.delete(usuario.id);
    this.bind();
    this.router.navigateByUrl('/usuarios');
  }
}
