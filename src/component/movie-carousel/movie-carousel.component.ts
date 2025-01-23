import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importação do Swiper e seus módulos
import Swiper, { Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import {Autoplay} from 'swiper';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
})
export class MovieCarouselComponent implements AfterViewInit {

  movies = [
    { title: 'Movie 1', image: 'opt_card.png' },
    { title: 'Movie 2', image: 'op2_card.png' },
    { title: 'Movie 3', image: 'op3_card.png' },
    { title: 'Movie 1', image: 'opt_card.png' },
    { title: 'Movie 2', image: 'op2_card.png' },
    { title: 'Movie 3', image: 'op3_card.png' },
    { title: 'Movie 1', image: 'opt_card.png' },
    { title: 'Movie 2', image: 'op2_card.png' },
    { title: 'Movie 3', image: 'op3_card.png' }
  ];

  ngAfterViewInit(): void {
    // Inicializando o Swiper com as configurações necessárias
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 4,  // Número de slides visíveis ao mesmo tempo
      spaceBetween: 10,  // Espaçamento entre os slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2000, // Tempo em milissegundos entre os slides
        disableOnInteraction: false // Continua o autoplay após interação
      },
      loop: true,  // Habilitar loop de navegação
      speed:1500
    });
  }
}


