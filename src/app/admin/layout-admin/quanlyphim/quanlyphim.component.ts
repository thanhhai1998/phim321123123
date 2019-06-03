import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from '../../../service/phim.service';
import { Phim } from 'src/app/Models/Phim';


@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.scss']
})
export class QuanlyphimComponent implements OnInit {
  constructor(private phimservice: PhimService) { }

  DSQLPhim: Phim[] = [];
  SearchResult: Phim[] = [];
  ngOnInit() {
    this.phimservice.LayDSPhim().subscribe(
      (kq: any) => {
        this.DSQLPhim = kq;
        // this.DSQLPhim.push(kq);
        // console.log(this.DSQLPhim);
      }
    );
  }

  XoaPhim(id: any) {
    const index = this.DSQLPhim.findIndex(item => item.MaPhim === id);
    if (index !== -1) {
      this.DSQLPhim.splice(index, 1);
    }
    this.phimservice.XoaPhim(id).subscribe(
      (kq: any) => {
        this.DSQLPhim.push(kq);
      }
    );
  }

  ThemPhimMoi(phim: Phim) {
    this.phimservice.ThemPhim(phim).subscribe(
      (kq: any) => {
        this.DSQLPhim.push(kq);
      }
    );
    // console.log(phim);
  }
  FindIndex(id: any) {
    const index = this.DSQLPhim.findIndex(item => item.MaPhim === id);
    return index;
  }

  CapNhatPhim(phim: Phim, id: any) {
    this.phimservice.SuaPhim(phim).subscribe(
      (kq: any) => {
        const index = this.DSQLPhim.findIndex(item => item.MaPhim === id);
        if (index !== -1) {
          this.DSQLPhim.push(kq);
        }
      }
    );
  }

  TimKiem(keyword: any) {
    console.log(keyword)
    this.SearchResult = [];
    for (let i = 0; i < this.DSQLPhim.length; i++) {
      if (this.DSQLPhim[i].TenPhim == keyword ||
        this.DSQLPhim[i].TenPhim.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1) {
        this.SearchResult.push(this.DSQLPhim[i]);
      }
    }
  }

}
