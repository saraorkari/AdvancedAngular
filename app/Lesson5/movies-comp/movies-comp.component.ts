import { Component, OnInit } from '@angular/core';
import { MoviesUtilsService } from '../movies-utils.service';

@Component({
  selector: 'app-movies-comp',
  templateUrl: './movies-comp.component.html',
  styleUrls: ['./movies-comp.component.css']
})
export class MoviesCompComponent implements OnInit {
  movies:any[]=[];
  movie:any;
  constructor(private utils: MoviesUtilsService) { }

  ngOnInit(): void {
  }
  ShowAllMovies(){
    this.utils.getMovies().subscribe((data:any) => {
      this.movies = data.splice(0,10);
      console.log(this.movies);
    });

  }
  GetMovieData(movieid:string){
    this.utils.getMovie(movieid).subscribe((data:any) => {
      this.movie = data;
      console.log(this.movie);
    });
  }
}
