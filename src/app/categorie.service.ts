import { Injectable } from '@angular/core';
import{ Categorie} from './categorie';
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
export class CategorieService {
  private handLeError<T> (operation='operation',result?:T){
    return(error:any): Observable<T> =>{
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);

    };
  } 
public baseUrl= 'http://localhost:8000/api/records/categorie';

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.baseUrl)
    .pipe(
      tap(_ => console.log("categorie")),
      catchError(this.handLeError<Categorie[]>('categorie', []))

    );
  }
  /*
  createCategorie(categorie: Categorie): Observable<any>{
  return this.htpp.post<Categorie>('http://localhost.8000/api/categories',categorie,httpOption)
  .pipe(
    tap((newCategorie:Categorie)=> console.log(`added hero w/id=${newCategorie.id}`)),
    catchError(this.handLeError<Categorie>('create'))
    );
  }
  */

}
