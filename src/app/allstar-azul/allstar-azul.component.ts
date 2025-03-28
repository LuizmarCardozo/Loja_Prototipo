import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allstar-azul',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './allstar-azul.component.html',
  styleUrl: './allstar-azul.component.css'
})
export class AllstarAzulComponent {
  titulo = 'Allstar Azul';
  valor = 180;
  imagens = [
    '/img/azul.jpeg', 
    '/img/azul1.jpg', 
    '/img/azul2.png'
  ];

}
