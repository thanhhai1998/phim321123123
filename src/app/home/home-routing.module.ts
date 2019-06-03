import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './layout-home/trang-chi-tiet/trang-chi-tiet.component';
import { TrangdatveComponent } from './layout-home/trang-chi-tiet/trangdatve/trangdatve.component';



const routes: Routes = [
  {
    
    path: '', component: LayoutHomeComponent, children: [
      { path: '', component: TrangChuComponent },
      { path: 'trangchu', component: TrangChuComponent },
      { path: 'trangchitiet/:id', component: TrangChiTietComponent },
    
    ]
    
  },
  
  { path: 'trangdatve/:malichchieu/:maphim', component: TrangdatveComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
