import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MoviesService]
})
export class MoviesListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MoviesService) { }

  getMovies(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies)
  }

  ngOnInit() {
    this.getMovies();
  }
}
