import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataLoaderService } from '@core/services/data-loader.service';
import { Contact } from '@shared/models/contact';

@Component({
  selector: 'app-intro',
  imports: [CommonModule],
  templateUrl: './intro.component.html'
})
export class IntroComponent {
  protected email: string = 'alejandro.sanchezaarcos@gmail.com';
  protected refLinkedIn: string = 'https://www.linkedin.com/in/alejandro-s%C3%A1nchez-arcos/';
  protected refGithub: string = 'https://github.com/alejandrosanchezaar';
  protected header: string = "Hi, I'm Alejandro,";
  protected subheader: string = "A Software Engineer";
  protected emailBtnText: string = 'Email';
    
  protected copyToClipboard() {
    navigator.clipboard.writeText(this.email)
    .then(() => {
      this.emailBtnText = 'Copied!';
        setTimeout(() => {
          this.emailBtnText = 'Email';
        }, 2000);
      })
    .catch(err => console.error("Error al copiar:", err));
  }

  protected openURL(url: string) {
    if (!url) return;
    window.open(url, '_blank');
  }
}
