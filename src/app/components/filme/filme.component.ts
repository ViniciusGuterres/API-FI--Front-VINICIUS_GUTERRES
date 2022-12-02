import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../services/filme.service';
import { FilmesModel } from '../../model/filmesModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IFilme } from '../../interfaces/IFilme'
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
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.filmerv.GetById(id);
    const { data } = result.data;

    const filme = data.map((item: any) => {
      if (item.is_on_netflix) {
        item.is_on_netflix = 'true';
      } else {
        item.is_on_netflix = 'false';
      }

      return item;
    })

    this.model = filme[0] as FilmesModel;
  }

  async save(): Promise<void> {
    const result = await this.filmerv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/filme');
    }
  }

}