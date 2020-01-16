import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatWebsiteComponent } from './creat-website.component';

describe('CreatWebsiteComponent', () => {
  let component: CreatWebsiteComponent;
  let fixture: ComponentFixture<CreatWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
