import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {MovieCarouselComponent} from '../component/movie-carousel/movie-carousel.component';
import {HeaderComponent} from '../component/header/header.component';

@Component({
  selector: 'app-root',
  imports: [MovieCarouselComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-carousel';
}
