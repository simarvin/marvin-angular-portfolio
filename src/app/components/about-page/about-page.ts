import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPage {
    toxPhoto = "assets/images/marvintoxphoto.jpg";
}
