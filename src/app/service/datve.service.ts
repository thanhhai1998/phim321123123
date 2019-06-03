import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ve } from '../Models/datve';
@Injectable({
  providedIn: 'root'
})
export class DatveService {

  constructor(private http: HttpClient) { }
  Datve(Ve: Ve) {
    return this.http.post('http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe', Ve,
      { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
  }
}
