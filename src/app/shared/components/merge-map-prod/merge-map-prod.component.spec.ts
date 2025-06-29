import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapProdComponent } from './merge-map-prod.component';

describe('MergeMapProdComponent', () => {
  let component: MergeMapProdComponent;
  let fixture: ComponentFixture<MergeMapProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
