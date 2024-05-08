import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioLivroPage } from './audio-livro.page';

describe('AudioLivroPage', () => {
  let component: AudioLivroPage;
  let fixture: ComponentFixture<AudioLivroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudioLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
