import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allstar-preto',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './allstar-preto.component.html',
  styleUrl: './allstar-preto.component.css'
})
export class AllstarPretoComponent {
  titulo = 'Allstar Preto';
  valor = 180;
  imagens = [
    '/img/preto.jpeg', 
    '/img/preto1.jpg', 
    '/img/preto2.jpg'
  ];

}
