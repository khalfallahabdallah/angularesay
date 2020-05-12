import { Injectable } from '@angular/core';
import{ Produit} from './produit';
import {Observable,of } from 'rxjs';
import{ HttpClient,HttpHeaders} from '@angular/Common/http';
import { tap } from 'rxjs/operators';
import{throwError}  from 'rxjs';
import { catchError,map } from 'rxjs/operators';
const httpOption={
  headers: new HttpHeaders({'content-type':'apllication/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private handLeError<T> (operation='operation',result?:T){
    return(error:any): Observable<T> =>{
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);

    };
  } 
public baseUrl= 'http://localhost:8000/api/records/produit';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseUrl)
    .pipe(
      tap(_ => console.log("produit")),
      catchError(this.handLeError<Produit[]>('produit', []))

    );
  }
  /*
  createProduit(produit: Produit): Observable<any>{
  return this.htpp.post<Produit>('http://localhost.8000/api/produits',produit,httpOption)
  .pipe(
    tap((newProduit:Produit)=> console.log(`added hero w/id=${newProduit.id}`)),
    catchError(this.handLeError<Produit>('create'))
    );
  }
  */
}
