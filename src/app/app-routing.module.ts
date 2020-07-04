import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './movies/main/main.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { FavouriteMoviesComponent } from 'src/app/auth/favouriteMovies/favouriteMovies.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'movies', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'favourites', component: FavouriteMoviesComponent, canActivate: [AuthGuard]},
  { path: ':url', component: MainComponent},
  { path: ':url/:id', component: MovieDetailComponent},
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: '', redirectTo: "/movies", pathMatch: "full" },
  { path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }