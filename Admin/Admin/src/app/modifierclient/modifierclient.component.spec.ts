import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclientComponent } from './modifierclient.component';

describe('ModifierclientComponent', () => {
  let component: ModifierclientComponent;
  let fixture: ComponentFixture<ModifierclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierclientComponent]
    });
    fixture = TestBed.createComponent(ModifierclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
