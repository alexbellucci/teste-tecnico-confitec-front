import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  usuarioForm: FormGroup = new FormGroup(null);
  usuarioId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: [Date, Validators.required],
      escolaridade: [Number, Validators.required]
    });
  }

  adicionarUsuario(): void {
    if (this.usuarioForm.invalid) {
      return;
    }

    const usuario = this.usuarioForm.value;

    this.userService.Create(usuario).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  get form() {
    return this.usuarioForm.controls;
  }
}
