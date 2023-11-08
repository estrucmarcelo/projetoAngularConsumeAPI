import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ChapterTag } from './model/chapterTag';
import { Product } from './model/product';
import { ProductApiFake } from './model/productApiFake';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000';

  baseurlFakeApi = "https://fakestoreapi.com"


  baseUrlSenac = "http://academico3.rj.senac.br"

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // getProducts(): Observable<Product>{
  //   return this.http.get<Product>(this.baseurl + '/products/');
   
  // }

  getChapterTag(): Observable<ChapterTag>{
    return this.http.get<ChapterTag>(this.baseUrlSenac + '/api/ChapterTag').pipe(retry(1),catchError(this.errorHandl))
  }

  getProductsFake(): Observable<ProductApiFake>{
    return this.http.get<ProductApiFake>(this.baseurlFakeApi + '/products?limit=5').pipe(retry(1),catchError(this.errorHandl))
  }

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.baseurl + '/products/').pipe(retry(1),catchError(this.errorHandl))
   
  }

  createProduct(data):Observable<Product>{
    return this.http.post<Product>(this.baseurl + "/products/", JSON.stringify(data),
    this.httpOptions).pipe(retry(1),catchError(this.errorHandl));
  }

  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }






}
