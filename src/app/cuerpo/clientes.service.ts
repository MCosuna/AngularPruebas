import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  

  todo;
  // categoria:[];
  constructor(public http:HttpClient) {
    
  }
  peti(categoria) {
    this.http.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=YOUR-API-KEY='+categoria+'').subscribe(
    resultado => {
     this.todo = resultado;
   })
   return this.todo; 
  }

}
