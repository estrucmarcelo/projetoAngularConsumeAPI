import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChapterTagComponent } from './list-chapter-tag.component';

describe('ListChapterTagComponent', () => {
  let component: ListChapterTagComponent;
  let fixture: ComponentFixture<ListChapterTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChapterTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChapterTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
