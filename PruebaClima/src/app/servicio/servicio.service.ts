import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'host': 'jsonplaceholder.typicode.com',
    'path': '/users?_limit=2',
    'method': 'GET'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  clima = 'https://api.openweathermap.org/data/2.5/weather?appid=b79cca09b35362c7d1eba2b055df3bbd&';  // URL to web api
  historial = 'https://history.openweathermap.org/data/2.5/aggregated/year?appid=43d162ec823ebf417d07877dc163563e&';



  Url!: string;
  ruta!: string;

  idPagoRI: Number = 0;
  idPagoRP: Number = 0;
  headers: HttpHeaders;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Auth-token': 'auth-token',
      'Accept': 'application/json'
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'host': 'jsonplaceholder.typicode.com',
        'path': '/users?_limit=2',
        'method': 'GET'
      })
    };
  }

  humedad(id: any) {
    this.Url = this.clima;
    return this.http.get(this.Url + 'id=' + id);
  }
  historiall(id: any) {
    this.Url = this.historial;
    return this.http.get(this.Url + 'id=' + id);
  }
}
