import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMascotasComponent } from './dialog-mascotas.component';

describe('DialogMascotasComponent', () => {
  let component: DialogMascotasComponent;
  let fixture: ComponentFixture<DialogMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
