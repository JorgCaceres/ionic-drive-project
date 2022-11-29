import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('SERVICIO DE USUARIO', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioService);
  });

  it('Existencia del servicio de usuario', () => {
    expect(service).toBeTruthy();
  });
});
