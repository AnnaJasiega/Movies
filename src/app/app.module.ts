import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollEventModule } from 'ngx-scroll-event'

import { AppComponent } from './app.component';
import { MainComponent } from './movies/main/main.component';
import { SearchResultComponent } from './movies/search-result/search-result.component';
import { MoviesSearchService } from 'src/app/services/movies-search.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

import { SliderComponent } from './movies/slider/slider.component';
import { RandomMoviesComponent } from './movies/random-movies/random-movies.component';
import { NavigationComponent } from './movies/navigation/navigation.component';
import { SummaryPipe } from './pipes/summary.pipe'
import { AppErrorHandler } from './common/app-error-handler';
import { LoginComponent } from './auth/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { FavComponent } from './auth/fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchResultComponent,
    MovieDetailComponent,
    SliderComponent,
    RandomMoviesComponent,
    NavigationComponent,
    SummaryPipe,
    LoginComponent,
    FavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    ScrollEventModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
  ],
  providers: [
    MoviesSearchService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AngularFireAuth,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//custom Pipes, error handling, authGuard
