import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngreboletaPage } from './ingreboleta.page';

describe('IngreboletaPage', () => {
  let component: IngreboletaPage;
  let fixture: ComponentFixture<IngreboletaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngreboletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
