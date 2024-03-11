import { Component, Input } from '@angular/core'
import { Movie } from '../../types/movie'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
// now we need to  retrieve the data that is needed for displaying on the main front page in itself that is different kinds of images not just 1
// that is all that is needed for displaying in the main home page.
export class BannerComponent {
  @Input() shows: Movie[] = []
  @Input() title: string = ''
  @Input() showsType: 'tv' | 'movie' = 'movie'
}
