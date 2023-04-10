import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    email: new FormControl(''),
    dataNascimento: new FormControl(''),
    escolaridade: new FormControl('')
  });
  usuario: User = new User;
  usuarioId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(params => {
      this.usuarioId = params['id'];
      this.userService.GetById(this.usuarioId).subscribe(usuario => {
        this.usuarioForm.patchValue(usuario);
      });
    });
  }

  editarUsuario(): void {
    if (this.usuarioForm.invalid) {
      return;
    }

    const usuario = this.usuarioForm.value;
    usuario.id = this.usuarioId;

    this.userService.Update(usuario).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  get form() {
    return this.usuarioForm.controls;
  }
}