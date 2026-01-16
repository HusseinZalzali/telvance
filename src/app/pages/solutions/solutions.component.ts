import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SOLUTIONS, Solution } from '../../data/solutions.data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionTitleComponent],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  solutions = SOLUTIONS;
  
  getSolutionsByCategory(category: string): Solution[] {
    return this.solutions.filter(s => s.category === category);
  }
  
  getCategories(): string[] {
    return [...new Set(this.solutions.map(s => s.category))];
  }
}
