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
    {title: 'Movie1', image: 'edplus_img/mov/act/opt/opt_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/act/opt/op2_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/com/bb2/bb2_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/com/mtq/mtq_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/com/rba/rba_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/com/nbt/nbt_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/dra/apf/apf_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/dra/cra/cra_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/sus/oco/oco_card.png'},
    {title: 'Movie1', image: 'edplus_img/mov/sus/sml/sml_card.png'},
  ];
  series = [
    {title: 'Serie1', image: 'edplus_img/ser/chl/chl_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/chv/chv_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/epc/epc_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/lts/lts_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/mpd/mpd_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/smp/smp_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/toc/toc_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/hdg/hdg_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/icl/icl_card.png'},
    {title: 'Serie1', image: 'edplus_img/ser/mrc/mrc_card.png'}

  ];

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 36,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: false, // Não para permanentemente o autoplay
      },
      loop: false, // Removido loop para evitar comportamento inesperado
      speed: 1500,
      breakpoints: {
        375: {slidesPerView: 2},
        412: {slidesPerView: 1},
        576: {slidesPerView: 2},
        667: {slidesPerView: 5},
        684: {slidesPerView: 4},
        734: {slidesPerView: 5},
        736: {slidesPerView: 5},
        768: {slidesPerView: 2},
        992: {slidesPerView: 3},
        1024: {slidesPerView: 4},
        1200: {slidesPerView: 4},
        1400: {slidesPerView: 6},
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
