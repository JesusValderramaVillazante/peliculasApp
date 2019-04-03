import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = null;
  oculto = 150;
  actores: Cast[] = [];
  slideOptActores = {
    slidesPerView: 2.8,
    freeMode: true,
    spaceBetween: -5
  }
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id).subscribe(resp => {
      console.log(resp);
      this.pelicula = resp;
    });

    this.moviesService.getActoresPelicula(this.id).subscribe(resp => {
      this.actores = resp.cast;
    })
  }
  regresar(){
    this.modalCtrl.dismiss();
  }
}
