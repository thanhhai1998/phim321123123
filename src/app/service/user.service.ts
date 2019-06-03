import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  DangKy(nguoidung: any): Observable<any> {
    return this.http.post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung", nguoidung,
      { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
  }
  Dangnhap(nguoidung: any): Observable<any> {
    return this.http.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoidung.TaiKhoan}&matkhau=${nguoidung.MatKhau}`, undefined,
      {
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
  }
  LayDSNguoiDung(): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`;
    const obs = this.http.get(url).pipe(map(res => res));
    return obs;
  }
  LichsuDatVe(nguoidung:any):Observable<any>{
    return this.http.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${nguoidung}`,undefined, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    });
  }
  XoaNguoiDung(taiKhoan: any): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    const oBs = this.http.delete(url).pipe(map((res: Response) => res.json()));
    return oBs;
  }
  ThemNguoiDung(nguoidung: any): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const obS = this.http.post(url, nguoidung, { headers: header }).pipe(map(res => res));
    return obS;
  }
  CapNhatInfoNguoiDung(nguoidung: any): Observable<any> {
    const url = `http://Svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const obse = this.http.post(url, nguoidung, { headers: header }).pipe(map((res: Response) => res.json()));
    return obse;
  }
}
