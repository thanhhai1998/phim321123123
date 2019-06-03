import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { PhimService } from 'src/app/service/phim.service';
import { Phim } from 'src/app/models/Phim';
declare var $: any;

// declare var $: any;
@Component({
  selector: 'app-sapchieu',
  templateUrl: './sapchieu.component.html',
  styleUrls: ['./sapchieu.component.scss']
})
export class SapchieuComponent implements OnInit, AfterViewInit {

  constructor(private dsphimSV: PhimService) { }
  DanhSachPhim = [];
  DanhSachPhimSapChieu: Phim[] = [];
  trailer: any;
  getTrailer(trailer) {
    this.trailer = trailer;
    console.log(trailer)
  }
  ngOnInit() {

    this.dsphimSV.LayDSPhim().subscribe(
      (kq: any) => {
        this.DanhSachPhim = kq;
        for (let i = 0; i < this.DanhSachPhim.length; i++) {
          if (this.DanhSachPhim[i].MaPhim > 200) {
            this.DanhSachPhimSapChieu.push(this.DanhSachPhim[i])
          }
        }
        console.log(kq)
        setTimeout(() => {
          $(".owl-carousel").owlCarousel({

            owl2row: true,
            loop: true,
            // autoplay: true,
            responsive: {
              0: {
                items: 2
              },
              600: {
                items: 2
              },
              1000: {
                items: 4,
              }
            }
          });
        }, 10);

      }
    );
  }
  // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // mySlideOptions = { items: 1, dots: true, nav: false };
  // myCarouselOptions = { items: 3, dots: true, nav: true };
  ngAfterViewInit() {
    // setTimeout(() => {
    //   $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //       0: {
    //         items: 2
    //       },
    //       600: {
    //         items: 3
    //       },
    //       1000: {
    //         items: 5
    //       }
    //     }
    //   });

    // }, 400);
  }
}

