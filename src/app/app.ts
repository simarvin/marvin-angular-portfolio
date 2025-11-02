import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { AboutPage } from "./components/about-page/about-page";

@Component({
  selector: 'app-root',
  imports: [Home, Header, Navbar, AboutPage],
  template: `
            <app-navbar/>
             <app-header/>
             <app-about-page/>
          
             `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('marvin-portfolio');
}
