import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad.component';
import { NewHabilidadComponent } from './componentes/habilidades/new-habilidad.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editAcerca/:id', component: EditAcercaDeComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editproyecto/:id', component: EditProyectoComponent },
  { path: 'newproyecto', component: NewProyectoComponent },
  { path: 'newskill', component: NewHabilidadComponent },
  { path: 'editskill/:id', component: EditHabilidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
    })],
  exports: [RouterModule],
})
export class AppRoutingModule { }