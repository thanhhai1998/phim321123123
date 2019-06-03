import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { QuanlylichchieuComponent } from './layout-admin/quanlylichchieu/quanlylichchieu.component';
import { QuanlynguoidungComponent } from './layout-admin/quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './layout-admin/quanlyphim/quanlyphim.component';


const routes: Routes = [
  {path: '', component: LayoutAdminComponent, children: [
      {path: 'quanlylichchieu', component: QuanlylichchieuComponent},
      {path: 'quanlynguoidung', component: QuanlynguoidungComponent},
      {path: 'quanlyphim', component: QuanlyphimComponent}

  ]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
