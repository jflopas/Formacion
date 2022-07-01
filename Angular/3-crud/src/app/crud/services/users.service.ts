import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.url}`, user);
  }

  usersList(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}`);
  }

  catchUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.url}/${id}`);
  }

  edit(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.url}/${user.id}`, user);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
