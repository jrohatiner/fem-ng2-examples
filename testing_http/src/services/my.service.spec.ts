import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders,
  beforeEach} from '@angular/testing';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MyService } from './my.service';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('MyService', () => {
  let service, backend, http, setConnection;

  beforeEachProviders(() => [
    MyService, HTTP_PROVIDERS, provide(XHRBackend, {useClass: MockBackend})
  ]);

  beforeEach(inject([MyService, XHRBackend, Http], (MyService, mockBackend, Http) => {
    service = MyService;
    backend = mockBackend;
    http = Http;

    setConnection = (options): void => {
      let responseOptions = { body: options};

      backend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(
          new Response(
            new ResponseOptions(responseOptions)
          )
        );
      });
    };
  }));

  it('#getItems', () => {
    let requestBody = {id: 1, name: 'First Item'};

    setConnection(requestBody);
    spyOn(http, 'get').and.callThrough();

    service.getItems()
      .subscribe((res) => {
        expect(http.get).toHaveBeenCalled();
        expect(res).toEqual(requestBody);
      });
  });
