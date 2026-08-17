import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import packageJson from '../../../../package.json';
import { RoutesConstants } from '../../shared/constants/routes.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private router = inject(Router);
  version = packageJson.version;

  goToHome() {
    this.router.navigate([RoutesConstants.HOME]);
  }

  goToAbout() {
    this.router.navigate([RoutesConstants.ABOUT]);
  }

  goToCoaches() {
    this.router.navigate([RoutesConstants.COACHES]);
  }

  goToPlayers() {
    this.router.navigate([RoutesConstants.PLAYERS]);
  }

  goToPrograms() {
    this.router.navigate([RoutesConstants.PROGRAMS]);
  }
}
