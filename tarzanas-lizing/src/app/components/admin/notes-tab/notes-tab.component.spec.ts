import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTabComponent } from './notes-tab.component';

describe('NotesTabComponent', () => {
  let component: NotesTabComponent;
  let fixture: ComponentFixture<NotesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});