import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { DatveService } from 'src/app/service/datve.service';
import { Ve } from 'src/app/Models/datve';
import { ActivatedRoute, Router } from '@angular/router';
import { ghe } from 'src/app/Models/ghe';
import { PhimService } from 'src/app/service/phim.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/service/user.service';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.scss']
})
export class TrangdatveComponent implements OnInit, AfterViewInit, OnDestroy {

  isShowMenuUser: boolean = false;
  showFormLogin: boolean = false;
  isLoginSuccess: boolean = false;
  kiemtraghedadat: number = 0;
  soLuongVe: number = 1;
  showHistory: boolean = false;
  LichsuDatve = [];
  // loading = false;
  gheDangDat = [];
  step = 1;
  disabledBuyTicket = true;
  gheDuocChon = [];
  nameUser = "";
  subDatve: Subscription;
  malichchieu: any;
  DanhSachGhe = [];
  phim: any;
  DanhSachGheClone: Array<ghe> = [];
  subBuytitket: Subscription;
  onFinished() {
    this.step = 1;
    this.showHistory = false;
    this.gheDuocChon = [];
    Swal.fire({
      animation: false,
      html: '<p style="font-size:15px">Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút</p>',
      showConfirmButton: false,
      timer: 3000

    })
  }
  openFormLogin() {
    this.showFormLogin = !this.showFormLogin;
  }
  closeLoginForm(status) {
    status = !status;
    this.showFormLogin = status;
  }
  showMenuUser() {
    this.isShowMenuUser = !this.isShowMenuUser;
  }
  getUserName(name) {
    this.nameUser = name;
    console.log(name);
    this.isLoginSuccess = true;
    this.showFormLogin = false;
  }
  cloneArray(DS) {
    for (let item of DS) {
      const gheClone = {
        Ghe: { ...item },
        status: false
      }
      this.DanhSachGhe.push(gheClone);

    }
    console.log(this.DanhSachGhe);
  }
  dangxuat() {
    this.isLoginSuccess = false;
    localStorage.clear();
    this.isShowMenuUser = false;
    this.LichsuDatve = [];
    this.showHistory = false;
  }

  chonghe(name) {
    this.disabledBuyTicket = true;
    // this.loading = true;
    this.spinner.show(name);
    setTimeout(() => {
      this.step = 2;
      for (let i = 0; i < this.DanhSachGhe.length; i++) {
        this.DanhSachGhe[i].status = false;
      }

      // this.loading = false;
      this.spinner.hide(name);
      this.gheDangDat = [];
      this.kiemtraghedadat = 0;
    }, 1500);
  }
  backtoStep1() {
    this.step = 1;
    this.showHistory = false;
    this.gheDuocChon = [];
  }
  Datghe(ghe) {
    if (ghe.status) {
      if (this.gheDangDat.length == this.soLuongVe) {

        for (let index of this.gheDangDat) {
          if (this.gheDangDat.length == this.soLuongVe) {

            this.gheDangDat[0].status = false;
            this.gheDangDat.splice(this.gheDangDat[0], 1);

            this.kiemtraghedadat--;

          }


        }
        this.gheDangDat.push(ghe);
        this.kiemtraghedadat++;
        console.log(this.kiemtraghedadat);
        for (let i = 0; i < this.gheDangDat.length - 1; i++) {
          for (let j = i + 1; j < this.gheDangDat.length; j++) {
            if (this.soLuongVe > 2 && this.gheDangDat.length === this.soLuongVe) {

              if (parseInt(this.gheDangDat[i].Ghe.TenGhe) - parseInt(this.gheDangDat[j].Ghe.TenGhe) == 2
                || parseInt(this.gheDangDat[j].Ghe.TenGhe) - parseInt(this.gheDangDat[i].Ghe.TenGhe) == 2) {

                if (parseInt(this.gheDangDat[i].Ghe.TenGhe) > parseInt(this.gheDangDat[j].Ghe.TenGhe)) {
                  const index = this.gheDangDat.findIndex(n => n.Ghe.TenGhe === (parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1).toString())
                  console.log(index);

                  if (index == -1) {
                    this.disabledBuyTicket = true;
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: 'btn p-0 ',
                      },
                      buttonsStyling: false,
                    })
                    swalWithBootstrapButtons.fire({
                      text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                      imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                      imageWidth: 80,
                      imageHeight: 50,
                      confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                    })

                  }
                  else {
                    this.disabledBuyTicket = false;
                  }
                }
                if (parseInt(this.gheDangDat[i].Ghe.TenGhe) < parseInt(this.gheDangDat[j].Ghe.TenGhe)) {
                  const index = this.gheDangDat.findIndex(n => n.Ghe.TenGhe === (parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1).toString())
                  console.log(index);

                  if (index == -1) {
                    this.disabledBuyTicket = true;
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: 'btn p-0 ',
                      },
                      buttonsStyling: false,
                    })
                    swalWithBootstrapButtons.fire({
                      text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                      imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                      imageWidth: 80,
                      imageHeight: 50,
                      confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                    })
                  }
                  else {
                    this.disabledBuyTicket = false;
                  }
                }
              }
              else {

              }
            }
            if (this.soLuongVe == 2) {
              if (parseInt(this.gheDangDat[i].Ghe.TenGhe) - parseInt(this.gheDangDat[j].Ghe.TenGhe) == 2 || parseInt(this.gheDangDat[j].Ghe.TenGhe) - parseInt(this.gheDangDat[i].Ghe.TenGhe) == 2) {
                this.disabledBuyTicket = true;
                console.log(this.gheDangDat[this.gheDangDat.length - 1])
                const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                    confirmButton: 'btn p-0 ',
                  },
                  buttonsStyling: false,
                })
                swalWithBootstrapButtons.fire({
                  text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                  imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                  imageWidth: 80,
                  imageHeight: 50,
                  confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                })

                console.log(this.gheDangDat[i].Ghe.TenGhe, this.gheDangDat[j].Ghe.TenGhe)
              }
              else {
                this.disabledBuyTicket = false;
              }
            }
          }


        }

      }
      else {
        // this.gheDangDat.push(ghe);
        // this.kiemtraghedadat++;  
        this.gheDangDat.push(ghe);
        this.kiemtraghedadat++;
        if (this.soLuongVe == 1) {
          this.disabledBuyTicket = false;
        }
        for (let i = 0; i < this.gheDangDat.length - 1; i++) {
          for (let j = i + 1; j < this.gheDangDat.length; j++) {

            if (this.soLuongVe > 2 && this.gheDangDat.length === this.soLuongVe) {

              if (parseInt(this.gheDangDat[i].Ghe.TenGhe) - parseInt(this.gheDangDat[j].Ghe.TenGhe) == 2
                || parseInt(this.gheDangDat[j].Ghe.TenGhe) - parseInt(this.gheDangDat[i].Ghe.TenGhe) == 2) {

                if (parseInt(this.gheDangDat[i].Ghe.TenGhe) > parseInt(this.gheDangDat[j].Ghe.TenGhe)) {
                  const index = this.gheDangDat.findIndex(n => n.Ghe.TenGhe === (parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1).toString())
                  console.log(index);

                  if (index == -1) {
                    this.disabledBuyTicket = true;
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: 'btn p-0 ',
                      },
                      buttonsStyling: false,
                    })
                    swalWithBootstrapButtons.fire({
                      text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                      imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                      imageWidth: 80,
                      imageHeight: 50,
                      confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                    })

                  }
                  else {
                    this.disabledBuyTicket = false;
                  }
                }
                if (parseInt(this.gheDangDat[i].Ghe.TenGhe) < parseInt(this.gheDangDat[j].Ghe.TenGhe)) {
                  const index = this.gheDangDat.findIndex(n => n.Ghe.TenGhe === (parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1).toString())
                  console.log(index);

                  if (index == -1) {
                    this.disabledBuyTicket = true;
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: 'btn p-0 ',
                      },
                      buttonsStyling: false,
                    })
                    swalWithBootstrapButtons.fire({
                      text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                      imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                      imageWidth: 80,
                      imageHeight: 50,
                      confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                    })
                  }
                  else {
                    this.disabledBuyTicket = false;
                  }
                }
              }
              else {

              }
            }
            if (this.soLuongVe == 2) {
              if (parseInt(this.gheDangDat[i].Ghe.TenGhe) - parseInt(this.gheDangDat[j].Ghe.TenGhe) == 2 || parseInt(this.gheDangDat[j].Ghe.TenGhe) - parseInt(this.gheDangDat[i].Ghe.TenGhe) == 2) {
                this.disabledBuyTicket = true;
                console.log(this.gheDangDat[this.gheDangDat.length - 1])
                const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                    confirmButton: 'btn p-0 ',


                  },
                  buttonsStyling: false,
                })
                swalWithBootstrapButtons.fire({
                  text: 'Bạn không được bỏ trống 1 ghế ở giữa !!',
                  imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
                  imageWidth: 80,
                  imageHeight: 50,
                  confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
                })

                console.log(this.gheDangDat[i].Ghe.TenGhe, this.gheDangDat[j].Ghe.TenGhe)
              }
              else {
                this.disabledBuyTicket = false;
              }
            }


          }


        }
        // for (let i = 0; i < this.gheDangDat.length; i++) {
        //   if (this.gheDangDat.length == this.soLuongVe) {
        //     if (parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 10 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 20 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 30 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 40 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 50 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) + 1 == 60 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 11 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 1 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 21 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 31 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 41 ||
        //       parseInt(this.gheDangDat[i].Ghe.TenGhe) - 1 == 51) {
        //         const index=this.gheDangDat
        //        this.disabledBuyTicket = true;
        //       const swalWithBootstrapButtons = Swal.mixin({
        //         customClass: {
        //           confirmButton: 'btn p-0 ',


        //         },
        //         buttonsStyling: false,
        //       })
        //       swalWithBootstrapButtons.fire({
        //         text: 'Bạn không thể bỏ trống 1 ghế ở mối đầu dãy !!',
        //         imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
        //         imageWidth: 80,
        //         imageHeight: 50,
        //         confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
        //       })


        //     }
        //     else {
        //       this.disabledBuyTicket = false;
        //     }
        //   }

        // }
        console.log(this.gheDangDat)

      }
    }
    else {
      for (let index in this.gheDangDat) {
        if (this.gheDangDat[index].Ghe.MaGhe === ghe.Ghe.MaGhe) {
          this.gheDangDat.splice(parseInt(index), 1);

          this.kiemtraghedadat--;
          this.disabledBuyTicket = true;
        }

      }
    }




  }
  datVe(Ve: Ve) {
    this.gheDuocChon = [];
    for (let i = 0; i < this.gheDangDat.length; i++) {
      let ve: { MaGhe: string, GiaVe: string } = {
        MaGhe: this.gheDangDat[i].Ghe.MaGhe,
        GiaVe: this.gheDangDat[i].Ghe.GiaVe
      }
      this.gheDuocChon.push(ve);

    }

    if (this.isLoginSuccess == false) {
      Swal.fire({
        title: ' Vui lòng đăng nhập trước khi đặt vé ! ',

        type: 'error',
        confirmButtonColor: '#fb4226',
        confirmButtonText: 'Đăng Nhập',

      }).then(() => {
        this.showFormLogin = true;
      });


    }
    else if (this.kiemtraghedadat < this.soLuongVe) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn p-0 ',
        },
        buttonsStyling: false,
      })
      swalWithBootstrapButtons.fire({
        text: 'Vui lòng chọn đủ số ghế !!',
        imageUrl: 'https://123phim.vn/app/assets/img/Post-notification.png',
        imageWidth: 80,
        imageHeight: 50,
        confirmButtonText: '<button   style="font-size: 16px;cursor: pointer;padding: 7px 25px;color: #fb4226; background-color: transparent;border: 1.2px solid #fb4226;border-radius: 20px;">OK</button>'
      })
    }
    else {
      console.log(this.gheDuocChon);

      // for (let ghedadat of this.gheDuocChon) {
      //   for (let ghe of this.DanhSachGheClone) {
      //     if (ghedadat.MaGhe == ghe.MaGhe) {
      //       console.log(ghe)
      //     }
      //   }
      // }

      Ve = {
        MaLichChieu: this.malichchieu,
        TaiKhoanNguoiDung: this.nameUser,
        DanhSachVe: this.gheDuocChon
      }
      this.DatveService.Datve(Ve).subscribe((res) => {
        console.log(res);

        Swal.fire({
          type: 'success',
          title: 'Đặt Vé Thành Công !!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/home'])
        })
      }, (err) => {
        console.log(err);
      })

    }
  }


  giamSLVE() {
    this.soLuongVe--;
    if (this.soLuongVe < 1) {
      this.soLuongVe = 1;
    }
  }
  tangSLVE() {
    this.soLuongVe++;
  }
  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private chitiet: PhimService,
    private DatveService: DatveService,
    private activeRoute: ActivatedRoute,
    private laychitietphongve: PhimService,
    private layLichsudatve: UserService,
  ) { }
  hinhPhim: any;
  ngAfterViewInit() {


  }
  xemLichSuDatVe() {
    this.showHistory = !this.showHistory;
    if (this.LichsuDatve.length === 0) {
      this.layLichsudatve.LichsuDatVe(this.nameUser).subscribe((res) => {
        console.log(res);
        this.LichsuDatve = res.DanhSachVeDaDat;
        console.log(this.LichsuDatve)
      }, (err) => {
        console.log(err);
      })
    }
  }
  ngOnInit() {
    this.LichsuDatve = [];


    let nguoidung = JSON.parse(localStorage.getItem('User'));
    if (nguoidung != null) {

      this.isLoginSuccess = true;
      this.nameUser = nguoidung.TaiKhoan;

    }
    else {
      this.isLoginSuccess = false;
    }
    this.activeRoute.params.subscribe(
      (res) => {
        console.log(res);

        this.subBuytitket = this.chitiet.chitietphim(res.maphim).subscribe((ress) => {
          console.log(ress);

          this.phim = ress;
          let index = this.phim.LichChieu.findIndex(n => n.MaLichChieu == res.malichchieu);
          if (index === -1) {

            this.router.navigate(['/home'])


          }
        }, (err) => {
          console.log(err);
        });
        this.laychitietphongve.laychitietphongve(res.malichchieu).subscribe(
          (result) => {
            this.DanhSachGheClone = result.DanhSachGhe;
            this.cloneArray(this.DanhSachGheClone);
          }, (err) => {
            this.router.navigate(['/home']);

          }

        )
      },
      (err) => { this.router.navigate(['/home']) }
    );







  }
  ngOnDestroy() {
  }

}
