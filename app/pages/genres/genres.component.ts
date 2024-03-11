import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Genre, Movie } from '../../types/movie'
import { MoviesService } from '../../services/movies.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null
  shows$: Observable<Movie[]> | null = null
  genreId = ''
  constructor(
    private Service: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId']
      this.shows$ = this.Service.getMoviesByGenre(this.genreId)
    })
    this.genres$ = this.Service.getMoviesGenres()
  }

  findByGenre(genreId: string) {
    this.shows$ = this.Service.getMoviesByGenre(genreId)
  }
}
