import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStanderComponent } from './blog-stander.component';

describe('BlogStanderComponent', () => {
  let component: BlogStanderComponent;
  let fixture: ComponentFixture<BlogStanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogStanderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogStanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
