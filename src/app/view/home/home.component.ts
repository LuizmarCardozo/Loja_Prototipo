import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    const arquivos = ['1.json', '2.json', '3.json', '4.json'];

  arquivos.forEach((arquivo) => {
    this.produtoService.getProdutos(arquivo).subscribe((data) => {
      this.produtos.push(data); 
    });
  });
}
}
