import {Component, signal} from '@angular/core';
import {DogService} from "../../services/dog.service";

@Component({
  selector: 'app-dog',
  standalone: true,
  templateUrl: './dog.component.html'
})
export class DogComponent {

  dogImage = signal<string | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private dogService: DogService) {}

  fetchDog() {
    this.error.set(null);
    this.loading.set(true);

    this.dogService.getRandomDog().subscribe({
      next: (imgUrl) => {
        this.dogImage.set(imgUrl);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading dog image');
        this.loading.set(false);
      }
    });
  }
}
