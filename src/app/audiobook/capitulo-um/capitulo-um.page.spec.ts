import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapituloUmPage } from './capitulo-um.page';

describe('CapituloUmPage', () => {
  let component: CapituloUmPage;
  let fixture: ComponentFixture<CapituloUmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapituloUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
