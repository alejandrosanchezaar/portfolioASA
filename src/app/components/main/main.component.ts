import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarCollapsed } from '../side-bar/services/sideBar-signal';
import { IntroComponent } from '@components/intro/intro.component';
import { ExperienceComponent } from '@components/experience/experience.component';
import { AboutMeComponent } from '@components/about-me/about-me.component';
import { EducationComponent } from '@components/education/education.component';
import { StackComponent } from '@components/stack/stack.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { SideBarComponent } from '@components/side-bar/side-bar.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, IntroComponent, ExperienceComponent, AboutMeComponent, EducationComponent, StackComponent, SideBarComponent, ProjectsComponent],
  templateUrl: './main.component.html'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  protected collapsed = sidebarCollapsed;
  protected activeSection: string = '';

  ngAfterViewInit(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    } else {
      console.error('scrollContainer no está definido');
    }
  }

  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection: string = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.scrollContainer.nativeElement.getBoundingClientRect().top;
      if (sectionTop <= 100 && sectionTop >= -100) {
        currentSection = `#${section.id}`;
      }
    });

    if (currentSection && currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }
}
