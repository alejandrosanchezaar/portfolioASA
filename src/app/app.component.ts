import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MainComponent } from '@components/main/main.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'portfolio-ASA';
  ngOnInit(): void {
    initFlowbite();
  }
}
