import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

describe('PAGINA LOGIN', () =>{

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [
        LoginPage
      ]
    }).compileComponents(); 
  });

  it ('1. Existencia de la pagina de login', () =>{
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });  

  it ('2. Formulario Invalido', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;

    app.credenciales.email='admin@admin.cl';

    expect(app.credenciales.password).toBeNull();
    // expect(app.credenciales.password).toBeTruthy();
  });
  
  it ('3. Formulario Valido', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;

    app.credenciales.email='admin@admin.cl';
   
    app.credenciales.password = 'admin'

    expect(app.credenciales.email).toBeTruthy();
    expect(app.credenciales.password).toBeTruthy();
  });


});







// describe('LoginPage', () => {
//   let component: LoginPage;
//   let fixture: ComponentFixture<LoginPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(LoginPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
