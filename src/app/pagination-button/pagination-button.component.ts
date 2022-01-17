import { Component, OnInit } from '@angular/core';
import { SearchboxComponent } from '../searchbox/searchbox.component';
@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.scss']
})
export class PaginationButtonComponent implements OnInit {

  constructor(private search : SearchboxComponent) { }

  ngOnInit(): void {

  }

}
