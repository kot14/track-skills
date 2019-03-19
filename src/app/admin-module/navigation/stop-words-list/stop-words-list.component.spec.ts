import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWordsListComponent } from './stop-words-list.component';

describe('StopWordsListComponent', () => {
  let component: StopWordsListComponent;
  let fixture: ComponentFixture<StopWordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopWordsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopWordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
