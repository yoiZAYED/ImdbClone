import { Component, Input, OnInit } from '@angular/core'
import { transition, animate, state, style, trigger } from '@angular/animations'
import { imagesBaseUrl } from '../../constants/images'
import { Movie } from '../../types/movie'
@Component({
  // this is the decorator function used to mark a class as an Angular component
  selector: 'app-slider', // this is the tag name given for this component so we can use it when we are using it in app file
  templateUrl: './slider.component.html', // this is the url of the website
  styleUrls: ['./slider.component.scss'], // this is the styling css which is used for the component
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })), // this involves having transition from void meaning image hasnt
      //reached then the image has reached with opacity 0
      // then in transition functiion is applied where in 1 sec it would appear
      transition('void <=> *', [animate('1s')]), // is state is a method , style is also a method .
    ]), // this is the name of the animation trigger that we are going to call.
  ],
})
export class SliderComponent implements OnInit {
  @Input() slides: Movie[] = []
  constructor() {}

  @Input() isHeader = false
  //we are going to remove the movie slides as we have defined here this is done inorder to bring uniformity that is in the other window
  //which we are going to get details about the information details, we are going to replace the slide with just a single window so yeah
  // array1 = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5']
  slideIndex = 0
  imagesBaseUrl = imagesBaseUrl
  //here we are first defining the variable and then assigning the imported value
  // this is the function that we are defining so as to slide the window in 5 seconds one after another.
  ngOnInit() {
    if (!this.isHeader) {
      // here we are going to make the header false when we are clicking on an image and we are switching the url
      this.changeSlide()
    }
  }
  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1
      if (this.slideIndex > 10) {
        this.slideIndex = 0
      }
    }, 5000)
  }
}
