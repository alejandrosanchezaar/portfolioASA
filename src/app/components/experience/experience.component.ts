import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from '@core/services/data-loader.service';
import { Experience } from '@shared/models/experience';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  protected titleSection: string = 'Experience';
  protected descriptionSection: string = 'Summary of my professional career, achievements and technologies used.';
  protected experiences: Experience[] = [];

  constructor(private dataService: DataLoaderService) { }

  ngOnInit() {
    this.loadInfo();
  }

  private async loadInfo() {
    await this.loadExperiences();
  }
  private async loadExperiences() {
    try {
      this.experiences = await this.dataService.loadInfo<Experience>('data/experience.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
