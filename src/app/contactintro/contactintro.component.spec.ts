import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactintroComponent } from './contactintro.component';

describe('ContactintroComponent', () => {
  let component: ContactintroComponent;
  let fixture: ComponentFixture<ContactintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactintroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
