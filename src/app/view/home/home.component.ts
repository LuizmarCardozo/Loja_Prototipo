import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  produtos?: any[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    

    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data; 
    });
}
}
