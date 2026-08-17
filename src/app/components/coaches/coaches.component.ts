import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-coaches',
    imports: [CommonModule, MatCardModule],
    templateUrl: './coaches.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './coaches.component.scss'
})
export class CoachesComponent {

  coachesInfo = [
    {src: '../assets/img/coaches/leighton.jpg', name: `Leighton 'M' Meredith`, title: 'Coach', alt: 'm-profile'},
    {src: '../assets/img/coaches/dwayne.jpg', name: `Dwayne 'Zaro' Thomas`, title: 'Coach', alt: 'zaro-profile'},
    {src: '../assets/img/coaches/malcolm.jpg', name: `Shomari Malcolm`, title: 'Coach', alt: 'malcolm-profile'},
    {src: '../assets/img/coaches/fabian.jpg', name: `Fabian Lewis`, title: 'Coach', alt: 'fabian-profile'},
    {src: '../assets/img/coaches/shana.jpg', name: `Shana Langley`, title: 'Academy Coordinator', alt: 'shana-profile'}
  ]
}
