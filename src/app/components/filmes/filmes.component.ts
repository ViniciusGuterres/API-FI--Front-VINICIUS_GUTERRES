import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filme.service'
import { FilmesModel } from '../../model/filmesModel'
import { MatFormFieldModule } from '@angular/material/form-field';
import { IFilme } from '../../interfaces/IFilme'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})

export class FilmesComponent implements OnInit {


  columns: string[] = ['id', 'name', 'is_on_netflix', 'imdb_score', 'director', 'genre'];
  // origem dos dados
  dataSource!: MatTableDataSource<IFilme>;


  constructor(private filmeSrv: FilmeService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const filmes = await this.filmeSrv.GetAll();
    const { data } = filmes.data;
    console.log("🚀 ~ file: filmes.component.ts:37 ~ FilmesComponent ~ bind ~ data", data)


    this.dataSource = new MatTableDataSource(data);
  }


  async delete(usuario: FilmesModel): Promise<void> {
    const result = await this.filmeSrv.delete(usuario.id);
    this.bind();
    this.router.navigateByUrl('/users');
  }
}
