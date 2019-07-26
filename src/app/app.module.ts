import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

// import archivo de rutas
import { APP_ROUTING } from './app.routes';

// // import mdb
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { IconsModule } from 'angular-bootstrap-md';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { GruposDeInteresComponent } from './pages/grupos-de-interes/grupos-de-interes.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { TopnewsComponent } from './pages/home/topnews/topnews.component';
import { ContactoComponent } from './pages/home/contacto/contacto.component';
import { TopnewsTarjetaComponent } from './pages/home/topnews/topnews-tarjeta/topnews-tarjeta.component';
import { TopnewsService } from './pages/home/topnews/services/topnews.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    EventosComponent,
    GruposDeInteresComponent,
    QuienesSomosComponent,
    BannerComponent,
    TopnewsComponent,
    ContactoComponent,
    TopnewsTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // IconsModule,
    // MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(APP_ROUTING, {useHash: true}),
  ],
  providers: [
    TopnewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
