import { Component } from '@angular/core';
import { Certification } from '@shared/models/certification';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { DataLoaderService } from '@core/services/data-loader.service';
import { Education } from '@shared/models/education';


@Component({
  selector: 'app-education',
  imports: [CarouselComponent],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  protected titleSection: string = 'Education';
  protected descriptionSection: string = 'Summary of my academic background and certifications.';
  protected certifications: Certification[] = [];
  protected education: Education[] = []

  constructor(private dataService: DataLoaderService) { }

  ngOnInit() {
    this.loadInfo();
  }

  private async loadInfo() {
    await this.loadCertifications();
    await this.loadEducation();
  }
  private async loadCertifications() {
    try {
      this.certifications = await this.dataService.loadInfo<Certification>('data/certifications.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private async loadEducation() {
    try {
      this.education = await this.dataService.loadInfo<Education>('data/education.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
