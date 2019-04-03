import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[]=[];
  constructor(private storage: Storage, private toasCtrl: ToastController) { }
  async presentToast(message: string){
    const toast = await this.toasCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarPelicula(pelicula: PeliculaDetalle){
    let existe = false;
    let mensaje = '';
    for(const peli of this.peliculas){
      if(peli.id === pelicula.id){
        existe = true;
        break;
      }
    }

    if(existe){
      this.peliculas = this.peliculas.filter(peli => {
        return peli.id !== pelicula.id;
      });
      mensaje = 'removido de favoritos';
    }else{
      this.peliculas.push(pelicula);
      mensaje = 'agregar a favorito';
    }   

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }
}
