import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="main-content">
      <div class="content-section">
        <h1>Welcome to {{ title }}</h1>
        <p>This is the home page.</p>
      </div>
      <div class="content-section">
        <h2>Section 1</h2>
      </div>
      <div class="content-section">
        <h2>Section 2</h2>
      </div>
      <div class="content-section">
        <h2>Section 3</h2>
      </div>
      <div class="content-section">
        <h2>Section 4</h2>
      </div>
      <div class="content-section">
        <h2>Section 5</h2>
      </div>
    </main>
  `,
  styleUrl: 'app.scss'
})
export class HomeComponent {
  title = 'Home Page';
}
