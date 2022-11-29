import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarPage } from './recuperar.page';

describe('PAGINA RECUPERAR CONTRASEÑA', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('1.Existencia de la pagina de recuperar contraseña', () => {
    expect(component).toBeTruthy();
  });

  it ('2. Formulario de Recuperar Contraseña Invalido', () => {
    const fixture = TestBed.createComponent(RecuperarPage);
    const app = fixture.componentInstance;

    app.email= null;

    expect(app.email).toBeNull();
  });

  it ('3. Formulario de Recuperar Contraseña Invalido', () => {
    const fixture = TestBed.createComponent(RecuperarPage);
    const app = fixture.componentInstance;

    app.email= 'admin@duocuc.cl';

    expect(app.email).toBeTruthy();
  });
});

