import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpackComponent } from './modifierpack.component';

describe('ModifierpackComponent', () => {
  let component: ModifierpackComponent;
  let fixture: ComponentFixture<ModifierpackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierpackComponent]
    });
    fixture = TestBed.createComponent(ModifierpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
