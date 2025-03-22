import { Component, Input, input } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  public produto: any;

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.produtoService.obterprodutorId(this.route.snapshot.params['id']).subscribe(res=>{
      this.produto = res;
    });
  }

}
