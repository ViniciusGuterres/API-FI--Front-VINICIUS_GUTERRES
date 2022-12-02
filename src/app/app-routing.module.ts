import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FilmeComponent } from './components/filme/filme.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"filmes", component: FilmesComponent},
  {path:"filme", component: FilmeComponent},
  {path:"filme/:id", component: FilmeComponent},
  { path:"Usuario", component: UsuarioComponent},
  { path:"Usuario/:id", component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
