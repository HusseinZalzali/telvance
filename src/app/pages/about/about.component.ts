import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  mission = {
    title: 'Our Mission',
    description: 'To empower organizations worldwide with cutting-edge telecommunications and software solutions that drive innovation, enhance connectivity, and transform businesses for the digital age.'
  };

  vision = {
    title: 'Our Vision',
    description: 'To be the global leader in telecom and software solutions, recognized for excellence, innovation, and our unwavering commitment to client success.'
  };

  values = [
    {
      title: 'Innovation',
      description: 'We continuously push boundaries and embrace emerging technologies to deliver groundbreaking solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from project delivery to client relationships.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
      icon: '🤝'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our organization and with our clients.',
      icon: '🤲'
    }
  ];

  timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Telvance Solutions was established with a vision to revolutionize telecom infrastructure.'
    },
    {
      year: '2017',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 20+ countries worldwide.'
    },
    {
      year: '2019',
      title: 'Cloud Services Launch',
      description: 'Launched comprehensive cloud and DevOps services division.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Introduced AI and data systems solutions to our service portfolio.'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Celebrated milestone of completing 500+ successful projects globally.'
    }
  ];

  expertise = [
    { name: '5G Networks', level: 95 },
    { name: 'Cloud Architecture', level: 90 },
    { name: 'Cybersecurity', level: 92 },
    { name: 'Software Development', level: 88 },
    { name: 'Network Infrastructure', level: 93 },
    { name: 'Data Analytics', level: 85 }
  ];
}
