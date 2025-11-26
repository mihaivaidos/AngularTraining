import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, throwError} from 'rxjs';

interface DogApiResponse {
  message: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class DogService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDog() {
    return this.http.get<DogApiResponse>(this.apiUrl).pipe(
      map(res => res.message),
      catchError(() => throwError(() => 'Error fetching dog image'))
    );
  }
}
