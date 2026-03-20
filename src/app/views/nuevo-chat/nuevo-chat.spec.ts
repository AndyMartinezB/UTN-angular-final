import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoChat } from './nuevo-chat';

describe('NuevoChat', () => {
  let component: NuevoChat;
  let fixture: ComponentFixture<NuevoChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoChat],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
