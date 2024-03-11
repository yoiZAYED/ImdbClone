import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnInit {
  @Input() key: string | null = null

  videoUrl: SafeResourceUrl = '' //the type we have defined is of SafeResourceUrl inorder to gain access
  //to some other website's videos/maps/etc
  constructor(private sanitizer: DomSanitizer) {} // here for security reasons in order to gain access to the videos we need a safe
  //ty protocol this is provided by the DomSanitizer and SafeResourceUrl

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.key
    )
  }
}
