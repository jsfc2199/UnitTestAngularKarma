import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de tener un routerLink a la pagina de medicos', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    let existe = false;
    for (const element of debugElements) {
      if (element.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy();
  });
});
