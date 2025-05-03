import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importação necessária para ngModel

@Component({
  selector: 'app-login',
  standalone: true, // Indica que o componente é standalone
  imports: [FormsModule], // Importando FormsModule diretamente no componente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = { email: this.email, senha: this.senha };

    this.http.post('http://localhost:5000/api/usuario/login', loginData).subscribe({
      next: (response: any) => {
        alert('Login bem-sucedido!');
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Falha no login! Verifique suas credenciais.');
      },
    });
  }
}