import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../interface/character';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<Character[]>(`${this.url}/character/1,3,5,7,47,109`)
      .pipe(map((datos) => datos));
  }
}
