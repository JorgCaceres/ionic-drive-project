import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { RegistrarPage } from './registrar.page';

describe('PAGINA REGISTRAR', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports:[
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations:[
        RegistrarPage
      ]
    }).compileComponents();
  });

  it('1. Existencia de la pagina de registrar', () => {
    const fixture = TestBed.createComponent(RegistrarPage);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it ('2. Formulario de Registro Invalido', () => {
    const fixture = TestBed.createComponent(RegistrarPage);
    const app = fixture.componentInstance;

    app.datos.correo ='admin@admin.cl';

    expect(app.datos.password).toBeNull();
  });
  
  it ('3. Formulario de Registro Valido', () => {
    const fixture = TestBed.createComponent(RegistrarPage);
    const app = fixture.componentInstance;

    app.datos.rut = '18.275.019-1',
    app.datos.nombre = 'Francisca',
    app.datos.p_apellido = 'Carrasco',
    app.datos.s_apellido = 'Orrego',
    app.datos.correo = 'fcarrasco@gmail.com',
    app.datos.password =  'jorge123',
    app.datos.perfil =  'conductor',
    app.datos.sede = 'Puente Alto',

    expect(app.datos.rut ).toBeTruthy();
    expect(app.datos.nombre).toBeTruthy();
    expect(app.datos.p_apellido).toBeTruthy();
    expect(app.datos.s_apellido).toBeTruthy();
    expect(app.datos.correo).toBeTruthy();
    expect(app.datos.password).toBeTruthy();
    expect(app.datos.perfil).toBeTruthy();
    expect(app.datos.sede).toBeTruthy();
  });


});

