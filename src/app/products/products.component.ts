import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
produits: Produit[];

  constructor(private produitservice:ProduitService,
    private router:Router) { 

  }

  ngOnInit() {
    this.getproduit();
  }
  getproduit(): void{
    this.produitservice.getProducts()
    .subscribe(categorie =>{ this.produits = categorie['records'];
    console.log(this.produits);
  });
  }

}
