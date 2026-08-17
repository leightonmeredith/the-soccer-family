import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { CoachesComponent } from './app/components/coaches/coaches.component';
import { PlayersComponent } from './app/components/players/players.component';
import { ProgramComponent } from './app/components/program/program.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'programs', component: ProgramComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })), // Set routing with hash strategy
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
}).catch((err) => console.error(err));
