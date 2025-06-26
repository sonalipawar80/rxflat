import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapPostsComponent } from './merge-map-posts.component';

describe('MergeMapPostsComponent', () => {
  let component: MergeMapPostsComponent;
  let fixture: ComponentFixture<MergeMapPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
