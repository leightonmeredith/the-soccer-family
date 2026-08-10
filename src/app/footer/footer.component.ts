import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConstants } from '../shared/utils/constants';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
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

  goToPrograms() {
    this.router.navigate([RoutesConstants.PROGRAMS]);
  }
}
