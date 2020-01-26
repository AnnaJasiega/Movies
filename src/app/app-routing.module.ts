import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './movies/main/main.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './movies/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'movies', component: MainComponent},
  { path: ':url', component: MainComponent},
  { path: ':url/:id', component: MovieDetailComponent},
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: '', redirectTo: "/movies", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }