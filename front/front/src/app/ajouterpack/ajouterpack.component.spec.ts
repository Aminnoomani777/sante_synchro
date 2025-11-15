import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpackComponent } from './ajouterpack.component';

describe('AjouterpackComponent', () => {
  let component: AjouterpackComponent;
  let fixture: ComponentFixture<AjouterpackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterpackComponent]
    });
    fixture = TestBed.createComponent(AjouterpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
