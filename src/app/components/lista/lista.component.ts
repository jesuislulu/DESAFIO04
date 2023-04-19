import { Component } from '@angular/core';
import { Alumnos } from '../../models/alumnos.model';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public flag: boolean = false;
  
  public alumnos: Alumnos[] = [
    new Alumnos (1, 37, 'Lucía', 'Rocha', 'Arquitectura', ),
    new Alumnos (2, 30, 'Roma', 'Martinelli', 'Arquitectura' ),
    new Alumnos (3, 22, 'María', 'Callas', 'Arquitectura' ),
    new Alumnos (4, 35, 'Antonio', 'Banderas', 'Arquitectura' ),
    new Alumnos (5, 22, 'Carlos', 'Andres', 'Arquitectura' ),
    new Alumnos (6, 28, 'Rosa', 'Cabral', 'Arquitectura' ),
    new Alumnos (7, 34, 'Estela', 'Sarraf', 'Arquitectura')
    ];

    selectAlumno() {
      this.flag = !this.flag;
    }

}