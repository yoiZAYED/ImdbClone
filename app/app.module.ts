import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { SliderComponent } from './components/slider/slider.component'
import { HttpClientModule } from '@angular/common/http'
import { MoviesService } from './services/movies.service'
import { BannerComponent } from './components/banner/banner.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { TabViewModule } from 'primeng/tabview'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'
import { CarouselModule } from 'primeng/carousel'
import { ImageModule } from 'primeng/image'
import { ShowsListComponent } from './pages/shows-list/shows-list.component' // this is the module which is used to expand our image that we have created and is used to display
//them in larger format
import { InputTextModule } from 'primeng/inputtext'
import { FormsModule } from '@angular/forms'
import { PaginatorModule } from 'primeng/paginator';
import { GenresComponent } from './pages/genres/genres.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
    ShowsListComponent,
    GenresComponent,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
  ],
})
export class AppModule {}
