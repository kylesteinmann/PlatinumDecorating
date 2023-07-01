import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './Components/pricing/pricing.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
