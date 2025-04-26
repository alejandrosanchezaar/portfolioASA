import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  protected profile_img: string = "assets/images/profile.jpg"
  protected titleSection: string = 'About me';
  protected location: string = 'Madrid';
  protected descriptionSection: string = "Graduate in Computer Science (Bilingual Degree) with mention in Software Engineering, currently pursuing the European Master in Software Engineering (EMSE). I am a creative and results-driven professional with a strong foundation in software development and a deep motivation to keep learning and growing in the tech industry. Passionate about designing innovative solutions that create real value and improve people's lives, I aim to apply my knowledge and skills to projects that make a positive impact.";
}
