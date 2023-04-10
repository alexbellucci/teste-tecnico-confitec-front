import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://localhost.com:44387/Usuario';

  constructor(private http: HttpClient) {}

  Create(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  GetById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  Update(user: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${user.id}`, user);
  }
}