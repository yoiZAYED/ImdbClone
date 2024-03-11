import { Component, Input } from '@angular/core'
import { Movie } from '../../types/movie'
import { imagesBaseUrl } from '../../constants/images'
@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
// here we are just defining a class and then we are going to create objects for the same.
export class ShowItemComponent {
  @Input() showItem: Movie | null = null
  @Input() showType: 'tv' | 'movie' = 'movie'
  // the @Input() is used to pass some values to the showitem variable from a parent component , here this is a child component so inorder to
  // do that we have used @input the parent here is the bannercomponent where
  //we had defined for the upcoming movies, now we need to retrieve that and display it
  //here this Movie is the data type which we have defined which is needed for us to retrieve the differnt details related to
  //the data retrevied from the database.
  imagesBaseUrl = imagesBaseUrl
}
