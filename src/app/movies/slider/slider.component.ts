import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('actors')actors: Array<String>;
  i:number = 0;
 

 

  constructor() { }

  ngOnInit() {
  }

}
