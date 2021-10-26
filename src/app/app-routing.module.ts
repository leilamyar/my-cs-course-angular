import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructuresComponent } from './data-structures/data-structures.component';
import { HomeComponent } from './home/home.component';
import { SortAlgoComponent } from './sort-algo/sort-algo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-structures', component: DataStructuresComponent },
  { path: 'sort-algo', component: SortAlgoComponent },
  // { path: 'sort-algo', component: SortAlgoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
