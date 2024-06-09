import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotPageComponent } from './pilot-page.component';

describe('PilotPageComponent', () => {
  let component: PilotPageComponent;
  let fixture: ComponentFixture<PilotPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotPageComponent]
    });
    fixture = TestBed.createComponent(PilotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
