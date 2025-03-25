import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {
 
  @Input() titulo:string="";
  @Input() link:string="";
  @Input() img:string="";
  @Input() valor!: number;
}
