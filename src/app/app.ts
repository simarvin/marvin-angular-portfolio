import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Home, Header, Navbar],
  template: `
             <app-navbar/>
             <app-header/>
             `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('marvin-portfolio');
}
