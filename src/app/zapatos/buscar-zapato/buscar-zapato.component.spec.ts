import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarZapatoComponent } from './buscar-zapato.component';

describe('BuscarZapatoComponent', () => {
  let component: BuscarZapatoComponent;
  let fixture: ComponentFixture<BuscarZapatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarZapatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarZapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
