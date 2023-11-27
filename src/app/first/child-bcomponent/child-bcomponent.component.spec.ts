import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBcomponentComponent } from './child-bcomponent.component';

describe('ChildBcomponentComponent', () => {
  let component: ChildBcomponentComponent;
  let fixture: ComponentFixture<ChildBcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildBcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
