import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents: [DetalleComponent],
  declarations: [ 
    SlideshowBackdropComponent, 
    SlideshowPosterComponent, 
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ],
  exports: [ 
    SlideshowBackdropComponent, 
    SlideshowPosterComponent, 
    SlideshowParesComponent,
    DetalleComponent 
  ]
})
export class ComponentsModule { }
