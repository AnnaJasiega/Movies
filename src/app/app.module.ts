import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './movies/main/main.component';
import { ShortOverviewComponent } from './movies/short-overview/short-overview.component';
import { SearchResultComponent } from './movies/search-result/search-result.component';
import { MoviesSearchService } from 'src/app/services/movies-search.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './movies/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShortOverviewComponent,
    SearchResultComponent,
    MovieDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [MoviesSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
