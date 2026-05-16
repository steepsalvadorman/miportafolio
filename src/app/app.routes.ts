import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CertificadosComponent } from './certificados';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'certificados', component: CertificadosComponent }
];
