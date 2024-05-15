import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevistaPage } from './revista.page';

describe('RevistaPage', () => {
  let component: RevistaPage;
  let fixture: ComponentFixture<RevistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RevistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
