import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NguoiDung } from 'src/app/Models/NguoiDung';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.scss']
})
export class QuanlynguoidungComponent implements OnInit, AfterViewInit {

  constructor(private nguoidungservice: UserService) { }
  DSNguoiDung: NguoiDung[] = [];
  NguoiDungResult: NguoiDung[] = [];
  ngOnInit() {
    this.nguoidungservice.LayDSNguoiDung().subscribe(
      (kq: any) => {
        this.DSNguoiDung = kq;
      }
    );
  }
  XoaNguoiDung(taiKhoan: any) {
    const index = this.DSNguoiDung.findIndex(itemTK => itemTK.TaiKhoan === taiKhoan);
    if (index !== -1) {
      this.DSNguoiDung.splice(index, 1);
    }
    this.nguoidungservice.XoaNguoiDung(taiKhoan).subscribe(
      (kq: any) => {
        this.DSNguoiDung = kq;
      }
    );
  }
  ThemMoiNguoiDung(nguoidung: NguoiDung) {
    this.nguoidungservice.ThemNguoiDung(nguoidung).subscribe(
      (kq: any) => {
        this.DSNguoiDung.push(kq);
      }
    );
  }
  SuaNguoiDung(nguoidung: NguoiDung) {
    this.nguoidungservice.CapNhatInfoNguoiDung(nguoidung).subscribe(
      (kq: any) => {
        this.DSNguoiDung.push(kq);
      }
    );

  }
  TimKiemNguoiDung(keyword: any) {
    this.NguoiDungResult = [];
    for (let i = 0; i < this.DSNguoiDung.length; i++) {
      if (this.DSNguoiDung[i].TaiKhoan === keyword ||
        this.DSNguoiDung[i].TaiKhoan.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1) {
        this.NguoiDungResult.push(this.DSNguoiDung[i]);
        console.log(this.NguoiDungResult);
      }

    }
  }
  ngAfterViewInit() {
  }



}


