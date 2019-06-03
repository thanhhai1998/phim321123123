import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemrapphim',
  templateUrl: './itemrapphim.component.html',
  styleUrls: ['./itemrapphim.component.scss']
})
export class ItemrapphimComponent implements OnInit {
  @Input() ItemRapPhim;
  constructor() { }

  ngOnInit() {
  }

}
