import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMoviesComponent } from './favouriteMovies.component';

describe('FavComponent', () => {
  let component: FavouriteMoviesComponent;
  let fixture: ComponentFixture<FavouriteMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
