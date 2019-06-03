import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() Itemphim;
  @Output() Trailer = new EventEmitter();
  constructor() { }
  trailer: any;
  emitTrailer(){
    this.Trailer.emit(this.trailer);
    console.log(this.trailer)
  }
  ngOnInit() {
    console.log(this.Itemphim)
    this.trailer = "https://www.youtube.com/embed/" + this.Itemphim.Trailer.substr(32) +"?autoplay=1";

  }

}
