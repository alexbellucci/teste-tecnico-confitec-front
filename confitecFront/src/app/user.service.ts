import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://my-api.com/users';

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  read(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${user.id}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}