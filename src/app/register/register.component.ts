import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule para o ngModel

@Component({
  selector: 'app-register',
  standalone: true, // Indica que este componente é standalone
  imports: [FormsModule], // Import FormsModule para usar o ngModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const registerData = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };

    this.http.post('http://localhost:5138/api/usuario/registrar', registerData, {
      headers: { 'Content-Type': 'application/json' },
    }).subscribe({
      next: () => {
        alert('Registro realizado com sucesso!');
      },
      error: () => {
        alert('Erro ao registrar. Tente novamente!');
      },
    });
  }
}