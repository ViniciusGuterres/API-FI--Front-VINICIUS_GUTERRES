import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"questoes", component: QuestionarioComponent},
  { path:"Usuario", component: UsuarioComponent},
  { path:"Usuario/:id", component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
