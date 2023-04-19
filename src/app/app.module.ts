import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AsideComponent } from './components/aside/aside.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveProgramComponent } from './components/reactive-program/reactive-program.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ToolbarComponent,
    FooterComponent,
    CarruselComponent,
    ListaComponent,
    FormulariosComponent,
    ReactiveProgramComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
