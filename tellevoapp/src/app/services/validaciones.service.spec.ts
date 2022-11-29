import { TestBed } from '@angular/core/testing';

import { ValidacionesService } from './validaciones.service';

describe('SERVICIO VALIDACIONES', () => {
  let service: ValidacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionesService);
  });

  it('Existebcia del servicio de validaciones', () => {
    expect(service).toBeTruthy();
  });
});
