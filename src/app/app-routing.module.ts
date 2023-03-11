import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { AppComponent } from './app.component';
const routes: Routes = [
 {path:'',redirectTo:'c',pathMatch:'full'},
 {path:'add-movie',component:AddMovieComponent},
 {path:'movie-details',component:MovieDetailsComponent},
 {path:'movie-list',component:MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
