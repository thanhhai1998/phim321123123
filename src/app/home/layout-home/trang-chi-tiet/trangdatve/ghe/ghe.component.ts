import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() itemGhe;
  @Input() gheDangDat;
  @Input() soLuongVe;
  // @Input() soGhe; 
  @Output() emitGhe = new EventEmitter;
  constructor() { }
  datghe() {
    this.itemGhe.status = !this.itemGhe.status;
    this.emitGhe.emit(this.itemGhe);
    // if(this.gheDangDat.length > 1){
    //   for(let i=0;i<this.gheDangDat.length;i++){
    //     for(let j=i+1;j<this.gheDangDat.length;j++){
    //       const ghei=parseInt(this.gheDangDat[i].Ghe.TenGhe);
    //       const ghej=parseInt(this.gheDangDat[j].Ghe.TenGhe);
    //        if(ghei>ghej){
    //          console.log(ghei,ghej)
    //           if(ghei-ghej > 1){
    //             console.log("errorrrr")
    //           }
    //        }
    //        else{
    //          if(ghej-ghei > 1){
    //            console.log("loi64")
    //          }
    //        }
    //     }
    //   }
    // } 
    // if (this.soLuongVe > 1) {
    //   if (this.gheDangDat.length == 0) {
    //     this.itemGhe.status = !this.itemGhe.status;
    //     this.emitGhe.emit(this.itemGhe);
    //   }
    //   else {

    //     for (let i = 0; i < this.gheDangDat.length; i++) {
    //       const ghei = parseInt(this.gheDangDat[i].Ghe.TenGhe);
    //       const ghej = parseInt(this.itemGhe.Ghe.TenGhe);
    //       console.log(ghei,ghej)
    //       if (ghei > ghej) { 
    //         if (ghei - ghej > 1) {
    //           console.log("không được bỏ trống 1 ghế ở giữa")
              
    //         }
    //         else{
    //           this.itemGhe.status = !this.itemGhe.status;
    //           this.emitGhe.emit(this.itemGhe);
    //           console.log("success");
    //           return;
    //         }
    //       }
    //       else if (ghej > ghei) {
    //         if (ghej - ghei > 1) {
    //           console.log("không được bỏ trống 1 ghế ở giữa")
          
             
    //         }
    //         else{
    //           this.itemGhe.status = !this.itemGhe.status;
    //           this.emitGhe.emit(this.itemGhe);
    //           console.log("success2");
    //           return;
    //         }
    //       }
    //       else if(ghei==ghej){
    //         this.itemGhe.status = !this.itemGhe.status;
    //           this.emitGhe.emit(this.itemGhe);
    //       }
    //     }
    //   }
    // }
    // else {
    //   this.itemGhe.status = !this.itemGhe.status;
    //   this.emitGhe.emit(this.itemGhe);
    // }
 
    // this.itemGhe.status = !this.itemGhe.status;
    // this.emitGhe.emit(this.itemGhe);







    // if (this.status == false) {
    //   if (this.soGheDangDat > this.soGhe) {
    //     alert("Không được chọn quá số ghế đã đặt")
    //     return null;
    //   }
    //   else {

    //     this.status = !this.status;
    //     this.emitGhe.emit(this.status);
    //   }
    // }
    // else {
    //   if (this.status == true) {

    //     this.status = !this.status;
    //     this.emitGhe.emit(this.status);
    //   }
    // }


  }
  ngOnInit() {
  }

}
