import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntermapComponent } from './intermap.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '', component: ContactComponent },
];

@NgModule({
  declarations: [IntermapComponent, MapComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [IntermapComponent],
})
export class IntermapModule {}
