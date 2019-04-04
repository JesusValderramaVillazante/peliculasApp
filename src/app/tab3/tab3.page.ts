import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  peliculas: PeliculaDetalle[] = [];
  constructor(private dataLocal: DataLocalService, private modalCtrl: ModalController){}
  ngOnInit(){}

  async ionViewWillEnter(){
    this.peliculas = await this.dataLocal.cargarFavorito();
  }

  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
    const {data} =  await modal.onDidDismiss();
    if(data.estado === 'update'){
      this.peliculas = await this.dataLocal.cargarFavorito();
    };
  }
}
