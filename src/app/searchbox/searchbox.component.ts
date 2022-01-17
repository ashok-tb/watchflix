import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movies/movie.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  data : any = [];
  page : number = 1;
  totalPages: number = 0;
  constructor(private route: ActivatedRoute, private searchResults: MovieService, private router: Router,
   ) { }
  getTitle(sTerm : string, page: number) : void {
    this.searchResults.getTitles(sTerm, page).subscribe(data =>{
      this.data = data;
      this.totalPages = Math.ceil((this.data.totalResults)/10);      
      
        this.router.navigate([`search/${sTerm}/${page}`]);
    })
    
  }

  ngOnInit(): void { 
    
   }

}
