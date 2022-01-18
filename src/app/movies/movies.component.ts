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
  data : any = [];
  page : any = 1;
  searchTerm : any = "";
  totalPages: number = 0;
  constructor(private route: ActivatedRoute, private searchResults: MovieService, private router: Router,
    private activeRoute:ActivatedRoute) { }
    
    getTitle(sTerm : any, page: number) : void {
      this.searchResults.getTitles(sTerm, page).subscribe(data =>{
        this.data = data;
        this.totalPages = Math.ceil((this.data.totalResults)/10);     
        
          this.router.navigate([`search/${sTerm}/${page}`]);
      })
      
    }

  ngOnInit(): void { 
    this.searchTerm = this.route.snapshot.paramMap.get("sTerm");
    this.page = this.route.snapshot.paramMap.get("page");
    this.getTitle(this.route.snapshot.paramMap.get("sTerm"), this.page)
   }
   numSequence(n: number): Array<number> {
    return Array(n);
  }

}
