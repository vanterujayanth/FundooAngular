import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispliayComponent } from './displiay.component';

describe('DispliayComponent', () => {
  let component: DispliayComponent;
  let fixture: ComponentFixture<DispliayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispliayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispliayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
