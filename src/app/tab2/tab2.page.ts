import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar: string = '';
  ideas: string[] = ['spiderman', 'avenger', 'el señor de los anillos', 'la vida es bella'];
  constructor(private moviesService: MoviesService){}
  buscar(e){
    const valor = e.detail.value;

    this.moviesService.buscarPelicula(valor).subscribe(resp => {
      console.log(resp);
    });

  }
}
