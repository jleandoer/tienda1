import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'loading', loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'product/:id', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule) },
  { path: 'summary', loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
