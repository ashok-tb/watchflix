import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movies/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [] ;
  data : any = [];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(movies=> this.movies = movies);
  }
  getTitle(searchTerm : string, page: number) : void {
    this.movieService.getTitles(searchTerm, page).subscribe(data =>{
      this.data = data;
    })
  }

  ngOnInit(): void {
    this.getMovies();
    this.getTitle("arrival", 3);
  }

}
