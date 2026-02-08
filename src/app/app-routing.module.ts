import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { RatedComponent } from './rated/rated.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:"Home" ,pathMatch: 'full'},
  {path:"Home", component:HomeComponent},
  {path:"Popular", component:PopularComponent},
  {path:"Rated", component:RatedComponent},
  {path:"Search", component:SearchComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
