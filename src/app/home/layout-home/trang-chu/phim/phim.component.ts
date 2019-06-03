import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  dangchieuStatus = true;
  constructor() { }
  HienPhimDangChieu() {
    this.dangchieuStatus = true;
  }
  HienPhimSapChieu() {
    this.dangchieuStatus = false;
  }
  ngOnInit() {
  }

}

