import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataLoaderService } from '@core/services/data-loader.service';
import { Project } from '@shared/models/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  protected titleSection: string = 'Projects';
  protected descriptionSection: string = 'Projects that highlight my development skills and the technologies I enjoy working with.';
  protected projects: Project[] = [];
  protected showSpinner: boolean = true;
  protected spinnerStates: boolean[] = [];
  protected githubURL: string = "https://github.com/alejandrosanchezaar"

  constructor(private dataService: DataLoaderService) { }

  ngOnInit() {
    this.loadInfo();
  }

  ngAfterViewInit() {
    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(err => {
            console.warn('Autoplay blocked in view:', err);
          });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    videos.forEach(video => observer.observe(video));
  }

  private async loadInfo() {
    await this.loadProjects();
    this.spinnerStates = this.projects.map(() => true);
  }
  private async loadProjects() {
    try {
      this.projects = await this.dataService.loadInfo<Project>('data/projects.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  protected onVideoLoad(index: number): void {
    this.spinnerStates[index] = false;
  }

  protected openURL(url: string) {
    if (!url) return;
    window.open(url, '_blank');
  }
}
