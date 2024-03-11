import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { Movie } from '../../types/movie'
import { IMAGES_SIZES } from '../../constants/images'
import { Video } from '../../types/video'
import { Image } from '../../types/image'
import { Actor } from '../../types/credits'
import { TvshowsService } from '../../services/tvshows.service'
import { mapToMovie, mapToMovies } from '../../types/tvshow'
@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '' //this is defined inorder to get access to each movie id one by one
  showType: 'tv' | 'movie' = 'movie'
  //here we are using the url whether it will be tv or movie type
  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null // these are observables which are used to retrieve real time data
  showImages$: Observable<Image[]> | null = null // here we have defined different data types for each observable that is available
  showCast$: Observable<Actor[]> | null = null
  similarShows$: Observable<Movie[]> | null = null //this is used to retrieve the similarShows images

  imagesSizes = IMAGES_SIZES //this is just used to retreive the image sizes for different images that are present
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvService: TvshowsService
  ) {}
  ngOnInit() {
    // console.log(this.router.params)
    // this.router.params.subscribe((params) => {
    //   this.showId = params['id'] })
    // }) // this is done inorder to read the id from the params object that is the parameter associated with the router.
    // // this.router.snapshot.params['id']
    // this.show$ = this.moviesService.getMovieById(this.showId) //here we are retrieveing the api access to get the data which is then converted to images etc format
    // // here we are only gaining access to the data.
    // this.showVideos$ = this.moviesService.getMovieVideos(this.showId)
    // this.showImages$ = this.moviesService.getMovieImages(this.showId)
    // this.showCast$ = this.moviesService.getMovieCast(this.showId)
    // this.similarShows$ = this.moviesService.getMovieSimilar(this.showId)
    this.showId = this.router.snapshot.params['id']
    this.showType = this.router.snapshot.params['type']

    if (this.showType === 'movie') {
      this.show$ = this.moviesService.getMovieById(this.showId)
      this.showVideos$ = this.moviesService.getMovieVideos(this.showId)
      this.showImages$ = this.moviesService.getMovieImages(this.showId)
      this.showCast$ = this.moviesService.getMovieCast(this.showId)
      this.similarShows$ = this.moviesService.getMovieSimilar(this.showId)
    }
    if (this.showType === 'tv') {
      this.show$ = this.tvService
        .getTvShowById(this.showId)
        .pipe(map(mapToMovie))
      this.showVideos$ = this.tvService.getTvShowVideos(this.showId)
      this.showImages$ = this.tvService.getTvShowImages(this.showId)
      this.showCast$ = this.tvService.getTvShowCast(this.showId)
      this.similarShows$ = this.tvService
        .getTvShowSimilar(this.showId)
        .pipe(map(mapToMovies))
    }
    //here we are retreiveing the data for the movie cast details
  }
}
