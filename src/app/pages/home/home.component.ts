import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, SectionTitleComponent, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = SERVICES.slice(0, 3);
  
  stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Global Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '50+', label: 'Countries Served' }
  ];

  whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our team consists of industry veterans with decades of combined experience.',
      icon: '👥'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and best practices in every project.',
      icon: '⚡'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise and global capabilities.',
      icon: '🌍'
    },
    {
      title: 'Proven Track Record',
      description: 'Delivering successful projects on time and within budget, every time.',
      icon: '✅'
    }
  ];
}
