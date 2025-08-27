import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { IonicModule } from '@ionic/angular';

import { LoadingPage } from './loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoadingPage }]) 
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
