import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
    selector: 'app-root',
    imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IslandStarsAcademy';
}
