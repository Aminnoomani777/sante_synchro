import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentraineurComponent } from './listentraineur.component';

describe('ListentraineurComponent', () => {
  let component: ListentraineurComponent;
  let fixture: ComponentFixture<ListentraineurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListentraineurComponent]
    });
    fixture = TestBed.createComponent(ListentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
