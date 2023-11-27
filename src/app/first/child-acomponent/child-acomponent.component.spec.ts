import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAcomponentComponent } from './child-acomponent.component';

describe('ChildAcomponentComponent', () => {
  let component: ChildAcomponentComponent;
  let fixture: ComponentFixture<ChildAcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildAcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
