import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  pelicuasRecientes: Pelicula[] = [];
  slideOpts = {
    slidesPerView: 1.2,
    freeMode: true
  }
  constructor(private moviesService: MoviesService){}
  ngOnInit(){
    this.moviesService.getFeature().subscribe(resp => {
      this.pelicuasRecientes = resp.results;
    });
  }
}