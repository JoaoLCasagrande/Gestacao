import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiobookMeuPage } from './audiobook-meu.page';

describe('AudiobookMeuPage', () => {
  let component: AudiobookMeuPage;
  let fixture: ComponentFixture<AudiobookMeuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudiobookMeuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
