import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiobookPage } from './audiobook.page';

describe('AudiobookPage', () => {
  let component: AudiobookPage;
  let fixture: ComponentFixture<AudiobookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudiobookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
