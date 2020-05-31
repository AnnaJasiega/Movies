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
import { PageNotFoundComponent } from './movies/page-not-found/page-not-found.component';
import { SliderComponent } from './movies/slider/slider.component';
import { RandomMoviesComponent } from './movies/random-movies/random-movies.component';
import { NavigationComponent } from './movies/navigation/navigation.component';
import { SummaryPipe } from './pipes/summary.pipe'
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchResultComponent,
    MovieDetailComponent,
    PageNotFoundComponent,
    SliderComponent,
    RandomMoviesComponent,
    NavigationComponent,
    SummaryPipe,
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
    ScrollEventModule
  ],
  providers: [
    MoviesSearchService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//custom Pipes, error handling,
