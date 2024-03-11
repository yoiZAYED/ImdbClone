import { Movie, MoviesDto } from './movie'
export type Tvshow = {
  id: number
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  name: string
  vote_average: number
  vote_count: number
  first_air_date: string
  revenue: number
  genres: Genre[]
  runtime?: number
  status?: string
}

// movies data type object
export type TvshowsDto = {
  page: number
  results: Tvshow[]
  total_pages: number
  total_results: number
}
// this function is called in order to update name component of movies that is two data types are present instead we comprise in using
//only 1 as
export function mapToMovies(tvshows: Tvshow[]): Movie[] {
  return tvshows.map((tvshow: Tvshow) => {
    return {
      ...tvshow,
      title: tvshow.name,
      original_title: tvshow.original_name,
    }
  })
}
export type Genre = {
  id: string
  name: string
}
export function mapToMovie(tvshow: Tvshow): Movie {
  return {
    ...tvshow,
    title: tvshow.name,
    original_title: tvshow.original_name,
  }
}
export function mapToMoviesDto(tvshowsDto: TvshowsDto): MoviesDto {
  return {
    results: tvshowsDto.results.map(mapToMovie),
    total_pages: tvshowsDto.total_pages,
    total_results: tvshowsDto.total_results,
    page: tvshowsDto.page,
  }
}
