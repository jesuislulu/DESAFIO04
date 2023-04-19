import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos.model';
import { ReactiveProgramService } from 'src/app/services/reactive-program.service';


@Component({
  selector: 'app-reactive-program',
  templateUrl: './reactive-program.component.html',
  styleUrls: ['./reactive-program.component.css']
})
export class ReactiveProgramComponent implements OnInit {

  public dataAlumn: Observable<Alumnos[]> | undefined;

  constructor(private reactiveProgramService: ReactiveProgramService) { }

  ngOnInit(): void {
    this.dataAlumn = this.reactiveProgramService.filteredStudentList$;
  }

  searchAlumn(data: any) {
    this.reactiveProgramService.getAlumn(data.target.value);
  }

}
