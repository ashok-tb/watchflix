import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
    getTitles(searchTerm : string, page: number){
      let titleUrl = 'http://www.omdbapi.com/?s='+ searchTerm +'&apikey=1caa6fbf&page=' + page;  // URL to web api
      return this.http.get(titleUrl);
    }

}
