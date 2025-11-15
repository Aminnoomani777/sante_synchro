import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MespackComponent } from './mespack.component';

describe('MespackComponent', () => {
  let component: MespackComponent;
  let fixture: ComponentFixture<MespackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MespackComponent]
    });
    fixture = TestBed.createComponent(MespackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
