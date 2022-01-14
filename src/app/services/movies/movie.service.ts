import { Injectable } from '@angular/core';
import { Movie } from '../../movie';
import { MOVIES } from '../../mock-movies';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

    getMovies():Observable<Movie[]>{
      const movies = of(MOVIES);
      return movies;
    }

    getTitles(searchTerm : string, page: number){
      let titleUrl = 'http://www.omdbapi.com/?s='+ searchTerm +'&apikey=1caa6fbf&page=' + page;  // URL to web api
      return this.http.get(titleUrl);
    }

}
