import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/pages/items/items.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemDetailComponent } from './components/pages/item-detail/item-detail.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: ItemsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'search/:termino', component: SearchComponent},
  { path: 'item-detail/:id', component: ItemDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
