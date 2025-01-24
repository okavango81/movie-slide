import {Component, AfterViewInit, ViewEncapsulation, ElementRef} from '@angular/core';
import {CommonModule} from '@angular/common';

// Importação do Swiper e seus módulos
import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  encapsulation: ViewEncapsulation.None, // Desativa o encapsulamento
})
export class MovieCarouselComponent implements AfterViewInit {
  movies = [
    {title: 'Movie 1', image: 'edplus_img/opt/opt_card.png'},
    {title: 'Movie 2', image:  'edplus_img/nbt/nbt_card.png'},
    {title: 'Movie 3', image: 'edplus_img/rba/rba_card.png'},
    {title: 'Movie 1', image: 'edplus_img/opt/op2_card.png'},
    {title: 'Movie 2', image: 'edplus_img/bb2/bb2_card.png'},
    {title: 'Movie 3', image: 'edplus_img/chp/chp_card.png'},
    {title: 'Movie 3', image: 'edplus_img/sof/sof_card.png'},
    {title: 'Movie 3', image: 'edplus_img/sml/sml_card.png'},
    {title: 'Movie 3', image: 'edplus_img/svp/svp_card.png'},
    {title: 'Movie 3', image: 'edplus_img/apf/apf_card.png'}
  ];
  series = [
    {title: 'Movie 1', image: 'edplus_img/chl/chl_card.png'},
    {title: 'Movie 2', image:  'edplus_img/chv/chv_card.png'},
    {title: 'Movie 3', image: 'edplus_img/lts/lts_card.png'},
    {title: 'Movie 1', image: 'edplus_img/mpd/mpd_card.png'},
    {title: 'Movie 2', image: 'edplus_img/toc/toc_card.png'},
    {title: 'Movie 2', image:  'edplus_img/epc/epc_card.png'},
    {title: 'Movie 2', image:  'edplus_img/smp/smp_card.png'}
  ];



  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false, // Não para permanentemente o autoplay
      },
      loop: false, // Removido loop para evitar comportamento inesperado
      speed: 1800,
      breakpoints: {
        350: {slidesPerView: 2},
        480: {slidesPerView: 3},
        520: {slidesPerView: 2},
        640: {slidesPerView: 4},
        768: {slidesPerView: 4},
        1024: {slidesPerView: 6},
        1280: {slidesPerView: 6},
        1536: {slidesPerView: 5},
        1600: {slidesPerView: 5},
      },
    });

    // Eventos para toque e mouse
    const swiperElement = this.elementRef.nativeElement.querySelector('.swiper');

    // Parar autoplay ao interagir
    swiper.on('touchStart', () => swiper.autoplay.stop());
    swiperElement.addEventListener('mouseenter', () => swiper.autoplay.stop());

    // Reiniciar autoplay ao terminar interação
    swiper.on('touchEnd', () => swiper.autoplay.start());
    swiperElement.addEventListener('mouseleave', () => swiper.autoplay.start());
  }
}
