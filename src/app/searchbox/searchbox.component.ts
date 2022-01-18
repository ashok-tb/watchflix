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
  page : any = 1;
  searchTerm : any = "";
  constructor(private route: ActivatedRoute, private searchResults: MovieService, private router: Router,
   ) { }
  getTitle(sTerm : any) : void {
    this.searchResults.getTitles(sTerm, 1).subscribe(data =>{
        if(sTerm==null){
          this.router.navigate([``]);
        }
        else{
          this.router.navigate([`search/${sTerm}/${1}`]);
          this.searchTerm = this.route.snapshot.paramMap.get("sTerm");
        }
        
        
        
    })
    
  }

  ngOnInit(): void { 
    if(this.route.snapshot.paramMap.get("sTerm")!=null){
      this.searchTerm = this.route.snapshot.paramMap.get("sTerm")
      this.getTitle(this.searchTerm)
    }
   
   }

}
