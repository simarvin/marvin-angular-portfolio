import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
    marvinLogo = "assets/images/marvin-high-resolution-logo-transparent.png"
}
