import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.component.html',
  styleUrl: '../../app.scss'
})
export class HomeComponent {
  title = 'Home Page';
}
