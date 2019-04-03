import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar: string = '';
  peliculas: Pelicula[] = [];
  busqueda: boolean = false;
  ideas: string[] = ['spiderman', 'avenger', 'el señor de los anillos', 'la vida es bella'];
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController){}
  buscar(e){
    const valor = e.detail.value.trim();
    if(valor.length !== 0){
      this.busqueda = true;
      this.moviesService.buscarPelicula(valor).subscribe(resp => {
        this.peliculas = resp['results'];
        this.busqueda = false;
      });
    }else{
      this.peliculas = [];
    }
  }
  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
