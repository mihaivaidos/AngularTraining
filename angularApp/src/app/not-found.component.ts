import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
    <div class="not-found-wrapper">
      <h1>404 - Not Found!</h1>
      <p>Oops! You seem to be lost in the Angular multiverse. 🌀</p>
      <p>Try going <a routerLink="/">home</a>?</p>
    </div>
  `
})
export class NotFoundComponent {}
