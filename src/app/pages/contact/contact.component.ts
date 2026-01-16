import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    address: '123 Tech Boulevard, Innovation District, City 12345',
    email: 'info@telvance.com',
    phone: '+1 (234) 567-890',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  onSubmit() {
    // Mock form submission - will be replaced with actual API call
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
