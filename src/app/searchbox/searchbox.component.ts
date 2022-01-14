import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movies/movie.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  data : any = [];
  page : number = 1;
  constructor(private route: ActivatedRoute, private searchResults: MovieService) { }
  getTitle(searchTerm : string, page: number) : void {
    this.searchResults.getTitles(searchTerm, page).subscribe(data =>{
      this.data = data;
    })
  }

  ngOnInit(): void { 

   }

}
