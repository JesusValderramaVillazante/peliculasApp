import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ],
  exports: [ SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent ]
})
export class ComponentsModule { }
