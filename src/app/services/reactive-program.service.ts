import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Alumnos } from '../models/alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveProgramService {

  searchAlumn$ = new BehaviorSubject<string>('');
  filteredStudentList$: Observable<Alumnos[]> | undefined;

  private studentList: Alumnos[] = [
    new Alumnos (1, 37, 'Lucía', 'Rocha', 'Arquitectura', ),
    new Alumnos (2, 30, 'Roma', 'Martinelli', 'Arquitectura' ),
    new Alumnos (3, 22, 'María', 'Callas', 'Arquitectura' ),
    new Alumnos (4, 35, 'Antonio', 'Banderas', 'Arquitectura' ),
    new Alumnos (5, 22, 'Carlos', 'Andres', 'Arquitectura' ),
    new Alumnos (6, 28, 'Rosa', 'Cabral', 'Arquitectura' ),
    new Alumnos (7, 34, 'Estela', 'Sarraf', 'Arquitectura')
  ];

  constructor() { 
    this.filteredList();
  }

  getAlumn(alumn: any) {
    this.searchAlumn$.next(alumn);
  }

  filteredList(): void {
    this.filteredStudentList$ = this.searchAlumn$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(term => {
          return this.studentList
            .filter(item => item.nombre.toLowerCase().indexOf(term.toLowerCase()) >= 0);
        })
      );
  }

}
