import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PaginationButtonComponent } from './pagination-button/pagination-button.component';
const routes: Routes = [
  {path:'search/:sTerm/:page', component:MoviesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
