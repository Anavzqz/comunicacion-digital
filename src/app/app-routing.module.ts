import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'navbar2', component: Navbar2Component},
  {path: 'carousel', component: CarouselComponent},
  {path: 'alarmas', component: AlarmsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
