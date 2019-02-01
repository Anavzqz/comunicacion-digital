import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AlarmsComponent } from './components/alarms/alarms.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'navbar2', component: Navbar2Component},
  {path: 'carousel', component: CarouselComponent},
  {path: 'alarmas', component: AlarmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
