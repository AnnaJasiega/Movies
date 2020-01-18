import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortOverviewComponent } from './short-overview.component';

describe('ShortOverviewComponent', () => {
  let component: ShortOverviewComponent;
  let fixture: ComponentFixture<ShortOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
