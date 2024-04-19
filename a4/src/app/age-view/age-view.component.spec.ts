import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeViewComponent } from './age-view.component';

describe('AgeViewComponent', () => {
  let component: AgeViewComponent;
  let fixture: ComponentFixture<AgeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
