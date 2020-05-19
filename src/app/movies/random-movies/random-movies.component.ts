import { Component, OnInit, Input } from '@angular/core';

import { MoviesSearchService } from '../../services/movies-search.service';

@Component({
  selector: 'app-random-movies',
  templateUrl: './random-movies.component.html',
  styleUrls: ['./random-movies.component.scss']
})
export class RandomMoviesComponent implements OnInit {

  @Input('type') type: string;
  private randomWords: Array<String> = ['baby', 'moon', 'light', 
    'movie', 'day', 'animal', 'tree', 'world', 'chair', 'school', 
    'meat', 'hall', 'unit', 'computer', 'light', 'summer', 'year', 
    'city', 'work', 'sun', 'break', 'trip', 'sea', 'black', 'white', 
    'color', 'dress', 'blue', 'lady', 'boy', 'people', 'art', 'history',
    'way',  'music', 'bird', 'problem', 'nature', 'soviety', 'story',
    'thing', 'freedom', 'paper'];
  private moviesAll:Array<Object> = [];


  constructor( private service: MoviesSearchService) { 
    
  }
  getRandomNumber(){
    return Math.floor(Math.random() * this.randomWords.length);
  }

  ngOnInit() {
    this.service.getRandom(this.randomWords[this.getRandomNumber()], this.type).subscribe((resp) => {
      this.moviesAll.push(resp); 
    })
  }

}
