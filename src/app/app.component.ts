import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {MovieCarouselComponent} from '../component/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-root',
  imports: [MovieCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-carousel';
}
