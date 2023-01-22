import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';

const routes: Routes = [
  {path:'',component:PortafolioComponent},
  {path:'login',component:LoginComponent },
  {path:'editAbout/:id',component:EditAcercaDeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }