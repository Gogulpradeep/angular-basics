import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LIST } from './list';

describe('LIST', () => {
  let component: LIST;
  let fixture: ComponentFixture<LIST>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LIST]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LIST);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
