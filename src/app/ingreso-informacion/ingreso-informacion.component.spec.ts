import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoInformacionComponent } from './ingreso-informacion.component';

describe('IngresoInformacionComponent', () => {
  let component: IngresoInformacionComponent;
  let fixture: ComponentFixture<IngresoInformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoInformacionComponent]
    });
    fixture = TestBed.createComponent(IngresoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
