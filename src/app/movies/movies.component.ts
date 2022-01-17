import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movies/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private searchResults: MovieService, private router: Router,
    private activeRoute:ActivatedRoute) { }
    

  ngOnInit(): void { 
    console.log(this.route.snapshot.params);
   }

}
