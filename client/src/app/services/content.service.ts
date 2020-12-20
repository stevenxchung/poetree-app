import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // For local only
  local: string = 'http://localhost:8080/content';
  deployed: string = 'https://poetree-app.herokuapp.com/content';

  constructor(private http: HttpClient) {}

  getPoemOfTheMonth(): Observable<any> {
    // Must use this.deployed when deployed
    return this.http.get(this.deployed);
  }
}
