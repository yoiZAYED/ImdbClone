import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { GenresDto, Movie, MoviesDto } from '../types/movie'
import { map } from 'rxjs'
import { VideosDto } from '../types/video'
import { ImagesDto } from '../types/image'
import { CreditsDto } from '../types/credits'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3/'
  private apiKey = '24f7d649186475c8d5cbf1ca69f9f86e'
  //in order to keep the api private we are going to store the api onto some private variables
  // so it will only be used here in this class defined here

  // this is used to define a single function here that can be used instead of changing the api access over and over
  // here we are doing it only once and then we are done for
  getMoviesByType(type: string, count = 12) {
    return this.http //This injects the HttpClient service into the component.
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
        // 'https://api.themoviedb.org/3/movie/popular?api_key=24f7d649186475c8d5cbf1ca69f9f86e'
        //this is what  we wouldm directly pass , but we can also pass the above to make it appear more secure.
        //here we have retreieved the data by specifying the api_key which is important to remeber
      )
      .pipe(map((data) => data.results.slice(0, count))) // this is done  usin Rjx we are going to replace the results over to data results directly.
  } // the slice operation is used to retrieve only data of 12 values

  // getPopularMovies() {
  //   return this.http //This injects the HttpClient service into the component.
  //     .get<MoviesDto>(
  //       `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
  //       // 'https://api.themoviedb.org/3/movie/popular?api_key=24f7d649186475c8d5cbf1ca69f9f86e'
  //       //this is what  we wouldm directly pass , but we can also pass the above to make it appear more secure.
  //       //here we have retreieved the data by specifying the api_key which is important to remeber
  //     )
  // }

  // getUpcomingMovies() {
  //   return this.http //This injects the HttpClient service into the component.
  //     .get<MoviesDto>(
  //       `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`
  //       // 'https://api.themoviedb.org/3/movie/popular?api_key=24f7d649186475c8d5cbf1ca69f9f86e'
  //       //this is what  we wouldm directly pass , but we can also pass the above to make it appear more secure.
  //       //here we have retreieved the data by specifying the api_key which is important to remeber
  //     )
  // }

  // getTopRatedMovies() {
  //   return this.http //This injects the HttpClient service into the component.
  //     .get<MoviesDto>(
  //       `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`
  //       // 'https://api.themoviedb.org/3/movie/popular?api_key=24f7d649186475c8d5cbf1ca69f9f86e'
  //       //this is what  we wouldm directly pass , but we can also pass the above to make it appear more secure.
  //       //here we have retreieved the data by specifying the api_key which is important to remeber
  //     )
  // }
  getMovieById(id: string) {
    return this.http //This injects the HttpClient service into the component.
      .get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string) {
    return this.http
      .get<VideosDto>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }
  getMovieImages(id: string) {
    return this.http
      .get<ImagesDto>(
        `${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  getMovieCast(id: string) {
    return this.http
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)))
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular'
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`
    )
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres))
  }

  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        map((data) => {
          return data.results
        })
      )
  }
}
