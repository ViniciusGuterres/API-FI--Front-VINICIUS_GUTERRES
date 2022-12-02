import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filme.service';
import { FilmesModel } from '../../model/filmesModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IUsuario } from '../../interfaces/IUsuario'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

    model: FilmesModel = new FilmesModel();

  constructor(
    private filmerv: FilmeService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.filmerv.GetById(id);
    const { data } = result.data;
    console.log("🚀 ~ file: filme.component.ts:31 ~ FilmeComponent ~ getId ~ data", data)

    // const {
    //   name,
    //   access_level,
    //   birth_date,
    //   office_role,
    //   sector
    // } = data[0];

    // formatting date
    // const jsDate = new Date(birth_date);
    // const dateFormatted = jsDate.toLocaleString("pt-br")
    // const fullDate = dateFormatted.substring(0, 10);

    // const objectReturn = {
    //   name,
    //   birth_date: fullDate,
    //   access_level,
    //   sector,
    //   office_role
    // };

    this.model = data[0] as FilmesModel;
  }

    async save(): Promise<void> {
    const result = await this.filmerv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/filme');
    }
  }

}


////////////////////////////////////////////////////////////////

// @Component({
//   selector: 'app-usuario',
//   templateUrl: './usuario.component.html',
//   styleUrls: ['./usuario.component.scss']
// })
// export class UsuarioComponent implements OnInit {

//   model: UsuarioModel = new UsuarioModel();

//   constructor(
//     private userSrv: UsuarioService,
//     private router: Router,
//     private active: ActivatedRoute
//   ) { }

//   ngOnInit() {
//     this.active.params.subscribe(p => this.getId(p['id']));
//   }

//   async getId(id: string): Promise<void> {
//     if (id === 'new') { return; }
//     const result = await this.userSrv.GetById(id);
//     const { data } = result.data;

//     const {
//       name,
//       access_level,
//       birth_date,
//       office_role,
//       sector
//     } = data[0];

//     // formatting date
//     const jsDate = new Date(birth_date);
//     const dateFormatted = jsDate.toLocaleString("pt-br")
//     const fullDate = dateFormatted.substring(0, 10);

//     const objectReturn = {
//       name,
//       birth_date: fullDate,
//       access_level,
//       sector,
//       office_role
//     };

//     this.model = objectReturn as UsuarioModel;
//   }

//   async save(): Promise<void> {
//     const result = await this.userSrv.post(this.model);
//     if (result.success) {
//       this.router.navigateByUrl('/usuarios');
//     }
//   }
// }
