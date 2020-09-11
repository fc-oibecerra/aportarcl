import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { IniciativasService } from './servicios/iniciativas.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { IniciativasComponent } from './components/iniciativas/iniciativas.component';
import { IniciativaComponent } from './components/iniciativa/iniciativa.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { IniciativaTarjetaComponent } from './components/iniciativa-tarjeta/iniciativa-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    IniciativasComponent,
    IniciativaComponent,
    BuscadorComponent,
    IniciativaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    IniciativasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
