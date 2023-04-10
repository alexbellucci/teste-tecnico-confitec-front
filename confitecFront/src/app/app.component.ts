import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'confitecFront';
  users: User[] = new Array;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('https://localhost.com:44387/Usuario/users').subscribe(data => {
      this.users = data;
    });
  }

  refreshUsers() {
    this.http.get<any[]>('https://localhost.com:44387/Usuario/users').subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(userId: number) {
    this.http.delete(`https://localhost.com:44387/Usuario/${userId}`).subscribe(() => {
      this.users = this.users.filter(u => u.id !== userId);
    });
  }

  editUser(id: number) {
    this.router.navigate(['/editar-usuario', id]);
  }

  addUser() {
    this.router.navigate(['/adicionar']);
  }
}