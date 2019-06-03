import { Component, OnInit, OnDestroy } from '@angular/core';
import { Phim } from 'src/app/Models/Phim';
import { PhimService } from 'src/app/service/phim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.scss']
})
export class CumrapComponent implements OnInit, OnDestroy {
  loairap = 'Cinestar';
  dsphim: Phim[] = [];
  subMovie: Subscription;
  constructor(private layDSphim: PhimService) { }
  ChonLoaiRap(val) {
    this.loairap = val;
  }
  ngOnInit() {
    this.subMovie = this.layDSphim.LayDSPhim().subscribe(
      (res) => {
        this.dsphim = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  ngOnDestroy() {
    this.subMovie.unsubscribe();
  }

}
