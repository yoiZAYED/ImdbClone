import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { TvshowsService } from '../../services/tvshows.service'
import { map } from 'rxjs'
import { mapToMovies } from '../../types/tvshow'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  popularMovies$ = this.moviesService.getMoviesByType('popular', 18)
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 18)
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 18)
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 18)
    .pipe(map(mapToMovies))
  topRatedTvShows$ = this.tvshowsService
    .getTvShowsByType('top_rated', 18)
    .pipe(map(mapToMovies))
  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}
}
