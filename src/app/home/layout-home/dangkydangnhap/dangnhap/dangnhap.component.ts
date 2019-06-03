import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit, OnDestroy {
  @Input() isShowFormLogin;
  @Output() evtLogin = new EventEmitter;
  SubDangnhap: Subscription;
  constructor(private userService: UserService, private spinner: NgxSpinnerService) { }
  errLogin: boolean = false;
  Dangnhap(nguoidung, formDangnhap, name) {
    if (formDangnhap.valid) {
      this.spinner.show(name);
      setTimeout(() => {
        this.spinner.hide(name);
        this.SubDangnhap = this.userService.Dangnhap(nguoidung).subscribe((res) => {
          console.log(res);
          if (typeof (res) == "object") {
            localStorage.setItem('User', JSON.stringify(res));

            this.evtLogin.emit(res.TaiKhoan);
          }
          else {
            this.errLogin = true;
            setTimeout(() => {
              this.errLogin=false
            }, 3000);
          }
        }, (err) => { console.log(err); });

      }, 1500);
    }

  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
