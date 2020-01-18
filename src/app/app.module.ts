import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './movies/main/main.component';
import { ShortOverviewComponent } from './movies/short-overview/short-overview.component';
import { SearchResultComponent } from './movies/search-result/search-result.component';
import { MoviesSearchService } from 'src/app/services/movies-search.service'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShortOverviewComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [MoviesSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
