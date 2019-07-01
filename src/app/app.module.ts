import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
