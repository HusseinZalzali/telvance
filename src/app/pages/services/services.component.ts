import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionTitleComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = SERVICES;
}
