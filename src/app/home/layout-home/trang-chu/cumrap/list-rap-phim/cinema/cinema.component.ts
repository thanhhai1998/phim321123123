import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  DSRapPhimCinema = [
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../assets/image/img_tenrap/galaxy-nguyen-du-15379626329832.jpg' , tenrap: 'jdkjbwjkdb' , diachi: 'wjkdbkjwbd' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-huynh-tan-phat-15381070102598.jpg'  , tenrap: 'wfhejbfeb' , diachi: 'wkwbdjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-kinh-duong-vuong-15381065563489.jpg'  , tenrap: 'wkfhkwnf' , diachi: 'wjkbdjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-nguyen-van-qua-15381052937743.jpg'  , tenrap: 'qwkfhjbwef' , diachi: 'wkjbdkjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-pham-van-chi-15381059548289 (1).jpg'  , tenrap: 'wklbqfdjwb' , diachi: 'wjkdbkjwb' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-quang-trung-15381040745219.jpg'  , tenrap: 'wjkqsbwdjkwb' , diachi: 'wkdbwnd' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-tan-binh-15381063333729.jpg'  , tenrap: 'wkqfdkwb' , diachi: 'wjdhwjkbd' , chitiet: '[chitiet]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-trung-chanh-15381048160387.jpg'  , tenrap: 'wkdkwbnd' , diachi: 'wkdbkjwbd' , chitiet: '[chitiet]' }
      ];
  constructor() { }

  ngOnInit() {
  }

}
