import { Component, HostListener, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoutesConstants } from '../../shared/constants/routes.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  items = [
    {
      title: 'Who We Are',
      subtitle: 'Island Stars Academy At A Glance',
      content: `Island Stars Academy is more than just a soccer club – we’re a community dedicated to nurturing talent,
              building character, and inspiring a lifelong love of the beautiful game. Located in the heart of our island,
              we provide an engaging and supportive environment for kids ages 4-15 to grow both on and off the field.`,
      button: 'LEARN MORE',
      route: 'about',
    },
    {
      title: 'Meet The Coaches',
      subtitle: 'Get To Know Our Certified Coaches',
      content: `At Island Stars Academy, we believe in the power of soccer to inspire, educate, and unite.
              Our dedicated team of professional soccer coaches is passionate about developing players both on and off the field.
              Whether your child dreams of becoming a professional athlete or simply wants to enjoy the game while building teamwork
              and leadership skills, we are here to guide their journey.`,
      button: 'LEARN MORE',
      route: 'coaches',
    },
    {
      title: 'Programs',
      subtitle: 'View Island Stars Available Programs',
      content: `Looking for a new challenge? We offer a variety of soccer programs designed to inspire, develop,
              and empower players of all skill levels. Whether your child is new to the game or striving for elite performance,
              our programs are tailored to foster growth, build confidence, and ignite a lifelong love for soccer.`,
      button: 'REGISTER NOW',
      route: 'programs',
    },
  ];
  isMobile: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  navigate(routeId: string) {
    switch (routeId.toLowerCase()) {
      case 'about':
        this.router.navigate([RoutesConstants.ABOUT]);
        break;
      case 'coaches':
        this.router.navigate([RoutesConstants.COACHES]);
        break;
      case 'programs':
        this.router.navigate([RoutesConstants.PROGRAMS]);
        break;
      default:
        break;
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 1024; // Define breakpoint for mobile view
  }
}


