import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack, StackGroup } from '../../shared/models/stack';
import { DataLoaderService } from '../../core/services/data-loader.service';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.component.html'
})

export class StackComponent implements OnInit {
  isAccordionOpen: boolean = true;
  stackGroups: StackGroup[] = [];
  titleSection: string = 'Stack';
  descriptionSection: string = 'Technologies, frameworks, and tools I have worked with.';
  protected accordionStates: boolean[] = [];

  constructor(private dataService: DataLoaderService) {}
  
  ngOnInit(){
    this.loadInfo();
  }

  private async loadInfo(){
      await this.loadMenuItems();
      this.accordionStates = this.stackGroups.map(() => true);
    }
    private async loadMenuItems(){
      try {
        this.stackGroups = await this.dataService.loadInfo<StackGroup>('data/stack.json');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  protected toggleAccordion(index: number): void {
    this.accordionStates[index] = !this.accordionStates[index];
  }
}
