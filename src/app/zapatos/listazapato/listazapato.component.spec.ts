import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListazapatoComponent } from './listazapato.component';

describe('ListazapatoComponent', () => {
  let component: ListazapatoComponent;
  let fixture: ComponentFixture<ListazapatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListazapatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListazapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
