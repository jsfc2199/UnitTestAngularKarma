import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        RouterModule.forRoot(
          []
        )
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pruebas');
  });

  it('debe de tener un router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(debugElement).not.toBeNull()
  })

  it('debe de tener un routerLink a la pagina de medicos', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))

    let existe = false;
    for (const element of debugElements) {
      if(element.attributes['routerLink'] === '/medicos'){
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy()
  })
});
