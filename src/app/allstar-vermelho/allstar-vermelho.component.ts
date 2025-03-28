import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-allstar-vermelho',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './allstar-vermelho.component.html',
  styleUrls: ['./allstar-vermelho.component.css']
})
export class AllstarVermelhoComponent {
  titulo = 'Allstar Vermelho';
  valor = 180;
  imagens = [
    '/img/vermelho.jpeg', 
    '/img/vermelho1.jpg', 
    '/img/vermelho2.jpg'
  ];
  
}