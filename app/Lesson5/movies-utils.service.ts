import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesUtilsService {

  constructor(private http:HttpClient) { }
  getMovies(){
    // return this.http.get(`http://api.tvmaze.com/shows`);
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  getMovie(movieid:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${movieid}`);
  }
}
