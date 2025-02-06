import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { CoachesComponent } from './app/coaches/coaches.component';
import { ProgramComponent } from './app/program/program.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'programs', component: ProgramComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })), // Set routing with hash strategy
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
.catch(err => console.error(err));
