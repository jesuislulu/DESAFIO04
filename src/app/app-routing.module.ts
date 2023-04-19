import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ReactiveProgramService } from './services/reactive-program.service';
import { ReactiveProgramComponent } from './components/reactive-program/reactive-program.component';

const routes: Routes = [
  { 
    path: 'carrusel', 
    component: CarruselComponent 
  },
  { 
    path: 'componentes', 
    component: CarruselComponent 
  },
  { 
    path: 'lista', 
    component: ListaComponent 
  },
  { path: 'formularios', 
  component: FormulariosComponent 
  },
  { 
    path: 'reactive-program',
component: ReactiveProgramComponent 
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
