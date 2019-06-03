import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/service/phim.service';
import { Phim } from 'src/app/Models/Phim';

@Component({
  selector: 'app-status-datve',
  templateUrl: './status-datve.component.html',
  styleUrls: ['./status-datve.component.scss']
})
export class StatusDatveComponent implements OnInit {
  lstMovie = [];
  LichChieu = [];
  lstGioChieu = [];
  disableButton: boolean = true;
  maPhim: any;
  malichchieu: any;
  constructor(private listMovie: PhimService) { }
  selectMovie(maphim) {
    console.log(maphim);
    this.maPhim = maphim;
    this.listMovie.chitietphim(maphim).subscribe(
      (res) => {
        console.log(res.LichChieu);
        this.LichChieu = res.LichChieu;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  selectDay(maLichChieu) {
    this.lstGioChieu = [];
    this.malichchieu = maLichChieu;
    const index = this.LichChieu.find(n => n.MaLichChieu == maLichChieu);
    this.lstGioChieu.push(index);
    console.log(this.lstGioChieu);
  }
  anableButtonBuyTitket(value) {
    if (value == "chongio") {
      this.disableButton = true;
    }
    else {
      this.disableButton = false;
    }
  }
  ngOnInit() {
    this.listMovie.LayDSPhim().subscribe((res) => {
      console.log(res);
      this.lstMovie = res;
      console.log(this.lstMovie);
    }, (err) => {
      console.log(err);
    });
    console.log()
  }

}
