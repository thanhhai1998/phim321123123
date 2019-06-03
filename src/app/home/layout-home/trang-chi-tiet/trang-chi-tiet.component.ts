import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PhimService } from 'src/app/service/phim.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit, AfterViewInit, OnDestroy {
  maPhim: number;
  phim: any;
  subChitietphim: Subscription;

  constructor(private spinner: NgxSpinnerService, private chitiet: PhimService, private activeRoute: ActivatedRoute) { }
  ngAfterViewInit() {

  }

  ngOnInit() {

    this.activeRoute.params.subscribe((res) => {
      this.maPhim = res.id;
      this.chitietPhim(this.maPhim);

    }, (err) => {
      console.log(err);
    });

  }
  trailer: any;
  chitietPhim(maphim: number) {
    this.subChitietphim = this.chitiet.chitietphim(maphim).subscribe((res) => {
      console.log(res);
      this.phim = res;

      this.trailer = "https://www.youtube.com/embed/" + this.phim.Trailer.substr(32) + "?autoplay=1";

    }, (err) => {
      console.log(err);
    })
  }
  ngOnDestroy() { 
  }
}
