import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinestar',
  templateUrl: './cinestar.component.html',
  styleUrls: ['./cinestar.component.scss']
})
export class CinestarComponent implements OnInit {
  DSRapPhimCinestar = [
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../assets/image/img_tenrap/galaxy-nguyen-du-15379626329832.jpg' , tenrap: 'GLX - Nguyễn Du' , diachi: '116 Nguyễn Du, Q.1' , chitiet: '[Chi tiết]',active:true },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-huynh-tan-phat-15381070102598.jpg'  , tenrap: 'GLX - Quang Trung' , diachi: 'L3-Co.opmart Foodcos...' , chitiet: '[Chi tiết]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-kinh-duong-vuong-15381065563489.jpg'  , tenrap: 'GLX - Trung Chánh' , diachi: 'TTVH Q12 – 09, Q L 22...' , chitiet: '[Chi tiết]' },
    // tslint:disable-next-line: max-line-length
        {image: '../../../../../../assets/image/img_tenrap/galaxy-nguyen-van-qua-15381052937743.jpg'  , tenrap: 'GLX - Phạm Văn Chí' , diachi: 'Lầu 5, TTTM Platinum Pl...' , chitiet: '[Chi tiết]' },
    // tslint:disable-next-line: max-line-length
    {image: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-tan-binh-15381063333729.jpg'  , tenrap: 'GLX - Tân Bình' , diachi: '246 Nguyễn Hồng Đào, Tân B...' , chitiet: '[Chi tiết]' },
    {image: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-kinh-duong-vuong-15381065563489.jpg'  , tenrap: 'GLX - Kinh Dương Vương' , diachi: '718bis Kinh Dương Vương...' , chitiet: '[Chi tiết]' },
    {image: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-huynh-tan-phat-15381070102598.jpg'  , tenrap: 'GLX - Huỳnh Tấn Phát' , diachi: '1362 Huỳnh Tấn Phát, KP1...' , chitiet: '[Chi tiết]' },
 
      ];
  constructor() { }

  ngOnInit() {
  }

}
