import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ProductDetailsPageModule } from './pages/product-details/product-details.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CartPageModule } from './pages/cart/cart.module';
import { HomePageModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CartPageModule,HomePageModule,ProductDetailsPageModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
