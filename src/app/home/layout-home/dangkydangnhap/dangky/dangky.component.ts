import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit, OnDestroy {
  subDangky: Subscription;

  constructor(private userService: UserService) { }
  Dangky(nguoidung, formDangky) {
    if (formDangky.valid) {
      nguoidung.MaNhom = "GP01";
      nguoidung.MaLoaiNguoiDung = "KhachHang";
      this.subDangky = this.userService.DangKy(nguoidung).subscribe((res) => {
        if (res == "Tài khoản đã tồn tại") {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'error',
            title: 'Tài khoản đã tồn tại !!',
            background: '#ffff',

          })
        }
        else {
          formDangky.resetForm();
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Đăng ký thành công !!',
            background: '#ffff',

          })
        }

      }, (err) => { console.log(err); });
    }

  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subDangky.unsubscribe();
  }

}
