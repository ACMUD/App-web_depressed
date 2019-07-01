import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = (APP_ROUTES);
