import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { MoviesDto } from '../../types/movie'
import { PaginatorState } from 'primeng/paginator'
import { TvshowsService } from '../../services/tvshows.service'
import { ActivatedRoute } from '@angular/router'
import { mapToMoviesDto } from '../../types/tvshow'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null
  searchValue = ''
  showsType: 'movie' | 'tv' = 'movie'
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.showsType = params['type']
    })
    this.getPagedShows(this.showsType, 1)
  }
  getPagedShows(
    showsType: 'movie' | 'tv',
    page: number,
    searchKeyword?: string
  ) {
    if (showsType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchKeyword)
    }
    if (showsType === 'tv') {
      this.showsList$ = this.tvShowsService
        .searchTvshows(page, searchKeyword)
        .pipe(map(mapToMoviesDto))
    }
  }
  searchChanged() {
    this.getPagedShows(this.showsType, 1, this.searchValue)
  }
  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1 //if pagenumber is a value and notn undefined then we can pass this as page number
    this.getPagedShows(this.showsType, pageNumber, this.searchValue)
  }
}
