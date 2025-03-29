import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  public produto: any;



  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    this.produtoService.getProduto(idParam).subscribe(res=>{
      this.produto = res;
      console.log(res);
    });
  }
}