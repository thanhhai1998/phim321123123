import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { QuanlynguoidungComponent } from './layout-admin/quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './layout-admin/quanlyphim/quanlyphim.component';
import { QuanlylichchieuComponent } from './layout-admin/quanlylichchieu/quanlylichchieu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderAdminComponent } from './layout-admin/header-admin/header-admin.component';
import { LoginAdminComponent } from './layout-admin/login-admin/login-admin.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    LayoutAdminComponent,
    QuanlynguoidungComponent,
    QuanlyphimComponent,
    QuanlylichchieuComponent,
    HeaderAdminComponent,
    LoginAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    LayoutAdminComponent,
    QuanlynguoidungComponent,
    QuanlyphimComponent,
    QuanlylichchieuComponent,
    HeaderAdminComponent,
    LoginAdminComponent
  ]
})
export class AdminModule { }
