import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allstar-branco',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './allstar-branco.component.html',
  styleUrl: './allstar-branco.component.css'
})
export class AllstarBrancoComponent {
  titulo = 'Allstar Branco';
  valor = 180;
  imagens = [
    '/img/branco.jpeg', 
    '/img/branco1.jpg', 
    '/img/branco2.jpg'
  ];
}
