import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopWrapperComponent } from './back-to-top-wrapper.component';

describe('BackToTopWrapperComponent', () => {
  let component: BackToTopWrapperComponent;
  let fixture: ComponentFixture<BackToTopWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToTopWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToTopWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
