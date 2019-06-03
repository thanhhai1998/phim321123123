import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HeaderComponent } from './layout-home/header/header.component';
import { FooterComponent } from './layout-home/footer/footer.component';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhimComponent } from './layout-home/trang-chu/phim/phim.component';
import { SliderComponent } from './layout-home/trang-chu/slider/slider.component';
import { DangchieuComponent } from './layout-home/trang-chu/phim/dangchieu/dangchieu.component';
import { SapchieuComponent } from './layout-home/trang-chu/phim/sapchieu/sapchieu.component';
import { CumrapComponent } from './layout-home/trang-chu/cumrap/cumrap.component';
import { TintucComponent } from './layout-home/trang-chu/tintuc/tintuc.component';
import { QuangcaoComponent } from './layout-home/trang-chu/quangcao/quangcao.component';
import { ItemPhimComponent } from './layout-home/trang-chu/phim/item-phim/item-phim.component';
import { LichchieuComponent } from './layout-home/trang-chi-tiet/lichchieu/lichchieu.component';
import { ThongtinphimComponent } from './layout-home/trang-chi-tiet/thongtinphim/thongtinphim.component';
import { TrangdatveComponent } from './layout-home/trang-chi-tiet/trangdatve/trangdatve.component';
import { GheComponent } from './layout-home/trang-chi-tiet/trangdatve/ghe/ghe.component';
import { MaterialModuleModule } from '../share/material/material.module';
import { DangkydangnhapComponent } from './layout-home/dangkydangnhap/dangkydangnhap.component';
import { DangkyComponent } from './layout-home/dangkydangnhap/dangky/dangky.component';
import { DangnhapComponent } from './layout-home/dangkydangnhap/dangnhap/dangnhap.component';
import {StatusDatveComponent} from './layout-home/trang-chu/status-datve/status-datve.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import {CinemaComponent} from './layout-home/trang-chu/cumrap/list-rap-phim/cinema/cinema.component';
import {CinestarComponent} from './layout-home/trang-chu/cumrap/list-rap-phim/cinestar/cinestar.component';
import { PipeModule } from '../pipe/pipe.module';
import {ItemrapphimComponent} from './layout-home/trang-chu/cumrap/itemrapphim/itemrapphim.component';
import { NgxLoadingModule } from 'ngx-loading';
import {SuatchieuComponent} from './layout-home/trang-chu/cumrap/suatchieu/suatchieu.component';

import { Dienanh24hComponent } from './layout-home/trang-chu/tintuc/dienanh24h/dienanh24h.component';

import { NgxSpinnerModule } from 'ngx-spinner';
 
import { ReviewComponent } from './layout-home/trang-chu/tintuc/review/review.component';
import { KhuyenmaiComponent } from './layout-home/trang-chu/tintuc/khuyenmai/khuyenmai.component';
import { ListRapPhimComponent } from './layout-home/trang-chu/cumrap/list-rap-phim/list-rap-phim.component';
 
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { OwlModule } from 'ngx-owl-carousel';

import { CountdownModule } from 'ngx-countdown';
import { NgxPageScrollModule } from 'ngx-page-scroll';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    LayoutHomeComponent,SuatchieuComponent,Dienanh24hComponent,ReviewComponent,ListRapPhimComponent,KhuyenmaiComponent,
    HeaderComponent,ItemrapphimComponent,
    FooterComponent,
    TrangChuComponent,CinemaComponent,CinestarComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,StatusDatveComponent,
    CumrapComponent,
    TintucComponent,
    QuangcaoComponent,
    ItemPhimComponent,
    LichchieuComponent,
    ThongtinphimComponent,
    TrangdatveComponent,
    GheComponent,
    DangkydangnhapComponent,
    DangkyComponent,
    DangnhapComponent,
  ],
  imports: [
    CommonModule,OwlModule,
    HomeRoutingModule, MaterialModuleModule, FormsModule, PipeModule, NgxLoadingModule
    , NgxSpinnerModule,CountdownModule,NgxPageScrollCoreModule,NgxPageScrollModule
  ],
  exports: [
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    TrangChuComponent,
    TrangChiTietComponent,
    PhimComponent,
    SliderComponent,
    DangchieuComponent,
    SapchieuComponent,
    CumrapComponent,
    TintucComponent,
    QuangcaoComponent,
    ItemPhimComponent,
    LichchieuComponent,
    ThongtinphimComponent,
    TrangdatveComponent,
    GheComponent, DangkydangnhapComponent, HttpClientModule
  ],
 
})
export class HomeModule { }
