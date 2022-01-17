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
  constructor(private route: ActivatedRoute, private searchResults: MovieService, private router: Router,
   ) { }
  getTitle(sTerm : string) : void {
    this.searchResults.getTitles(sTerm,1).subscribe(data =>{
        this.router.navigate([`search/${sTerm}/${1}`]);
    })
    
  }

  ngOnInit(): void { 
    
   }

}
