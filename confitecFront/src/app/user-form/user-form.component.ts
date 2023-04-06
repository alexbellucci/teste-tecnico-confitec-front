import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  save() {
    this.userService.create(this.user).subscribe(
      () => this.router.navigate(['/users']),
      error => console.error(error)
    );
  }
}