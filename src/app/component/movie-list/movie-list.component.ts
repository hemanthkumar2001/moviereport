import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent  implements   OnInit{
  
  movies:any;
currentMovie=null;
currentIndex=-1;
title='';
values:any;
Movie={
  id:'',
  title:'',
  description:'',
  published:false
};
submitted = false;

constructor(private movieservice:MovieServiceService){}
ngOnInit(){
  this.retrieveMovie();
}
retrieveMovie(){
  this.movieservice.getAll().subscribe(
    (data:any)=>{
      this.movies=data;
      console.log(data)
    },
  (error:any)=> {
    console.log(error);
  });
}
deleteMovie(movie: { id: any; }){
  this.Movie.id=movie.id;
  console.log(this.movies.id)
}
deleteConfirm(){
  this.movieservice.delete(this.movies.id)
    .subscribe(
      (      response: any) => {
      console.log(response);
        this.submitted = true;
        this.retrieveMovie();
       },
       ( error :any)=> {
         console.log(error);
       });
}
editMovie(movie:{id:any;},data:any){
  this.movies.id=movie.id;
  this.movies.title=data.title;
  this.movies.description=data.description;
  this.movies.published=data.published;
}
updateMovie(){
  const data = {
    title: this.movies.title,
    description: this.movies.description
  };

  this.movieservice.update(this.movies.id,data)
    .subscribe(
      (      response: any) => {
      console.log(response);
        this.submitted = true;
        this.retrieveMovie();
       },
       ( error :any)=> {
         console.log(error);
       });
}
}
