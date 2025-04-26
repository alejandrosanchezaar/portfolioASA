import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { sidebarCollapsed } from './services/sideBar-signal';
import { MenuItem } from '../../shared/models/menu';
import { Contact } from '../../shared/models/contact';
import { DataLoaderService } from '../../core/services/data-loader.service';
import { ViewChildren, ElementRef, QueryList, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit, OnChanges {
  protected collapsed = sidebarCollapsed;
  protected heroTitle: string = 'Alejandro Sánchez';
  protected heroSubtitle: string = 'Software Engineer';
  protected profile_img: string = "assets/images/profile.jpg"
  protected menuItems: MenuItem[] = [];
  protected contactItems: Contact[] = [];
  @Input() activeSection!: string;
  @ViewChildren('menuBtn') menuButtons!: QueryList<ElementRef>;
  constructor(private dataService: DataLoaderService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeSection'] && !changes['activeSection'].firstChange) {
      this.scrollToActive();
    }
  }

  private scrollToActive() {
    if (!this.menuItems || !this.menuButtons) return;

    const index = this.menuItems.findIndex(item => item.href === this.activeSection);
    const button = this.menuButtons.get(index);

    if (button) {
      button.nativeElement.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }

  ngOnInit() {
    this.loadInfo();
  }

  private async loadInfo() {
    await this.loadMenuItems();
    await this.loadContactItems();
  }
  private async loadMenuItems() {
    try {
      this.menuItems = await this.dataService.loadInfo<MenuItem>('data/menu.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private async loadContactItems() {
    try {
      this.contactItems = await this.dataService.loadInfo<Contact>('data/contact.json');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  toggleSidebar() {
    this.collapsed.set(!this.collapsed());
  }
}
