import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlerListComponent } from './crawler-list.component';

describe('CrawlerListComponent', () => {
  let component: CrawlerListComponent;
  let fixture: ComponentFixture<CrawlerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
