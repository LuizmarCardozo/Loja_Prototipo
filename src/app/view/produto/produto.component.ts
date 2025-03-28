import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'] 
})
export class ProdutoComponent {
  public produto: any;

  constructor(
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id']; // Captura o ID como string
    console.log('ID bruto recebido da rota:', idParam);
  
    const id = parseInt(idParam, 10); // Converte para número de forma segura
    console.log('ID convertido:', id);
  
    const produtos = [
      {
        id: 1,
        titulo: 'Allstar Vermelho',
        valor: 180,
        img: 'public/img/vermelho.jpeg'
      },
    ];
  
    this.produto = produtos.find((p) => p.id === id); // Busca o produto
    console.log('Produto encontrado:', this.produto); // Debug
  }
}