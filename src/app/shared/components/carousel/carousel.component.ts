import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Certification } from '@shared/models/certification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: Certification[] = [];
  @Input() carouselId: string = 'custom-carousel';
  @Input() autoplayInterval: number = 5000;

  currentIndex = 0;
  direction = 'left';
  isAnimating = false;
  previousIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.intervalId = setInterval(() => {
      this.next();
    }, this.autoplayInterval);
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    if (this.isAnimating || index === this.currentIndex) return;

    this.previousIndex = this.currentIndex;
    this.direction = index > this.currentIndex ? 'left' : 'right';
    this.currentIndex = index;
    this.animateSlide();
    this.resetAutoplay();
  }

  next(): void {
    if (this.isAnimating) return;

    this.previousIndex = this.currentIndex;
    this.direction = 'right';
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.animateSlide();
    this.resetAutoplay();
  }

  prev(): void {
    if (this.isAnimating) return;

    this.previousIndex = this.currentIndex;
    this.direction = 'left';
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.animateSlide();
    this.resetAutoplay();
  }

  animateSlide(): void {
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }

  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  getItemClasses(index: number): string {
    if (index === this.currentIndex) {
      return 'absolute w-full h-full transition-transform duration-700 ease-in-out translate-x-0 opacity-100 z-10';
    }

    if (index === this.previousIndex) {
      const translate = this.direction === 'left' ? '-translate-x-full' : 'translate-x-full';
      return `absolute w-full h-full transition-transform duration-700 ease-in-out ${translate} opacity-0 z-0`;
    }

    const hiddenTranslate = this.direction === 'left' ? 'translate-x-full' : '-translate-x-full';
    return `absolute w-full h-full opacity-0 ${hiddenTranslate} z-0`;
  }

  trackByFn(index: number): number {
    return index;
  }
}