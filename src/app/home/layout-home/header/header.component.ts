import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/service/phim.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowMenuUser: boolean = false;
  showFormLogin: boolean = false;
  nameUser = "";
  isLoginSuccess: boolean = false;
  isShowWrapMenu: boolean = false;
  isShowmenuSearch: boolean = false;
  listMovie = [];
  searchResult = [];
  soketqua: number =0;
  scroll(el:HTMLElement){
    el.scrollIntoView();
  }
  showWrapMenu() {
    this.isShowWrapMenu = !this.isShowWrapMenu;
  }
  showmenuSearch() {
    this.isShowmenuSearch = !this.isShowmenuSearch;
    this.showFormLogin = false;

  }
  searchMovie(keyword) {
    this.searchResult = [];
    console.log(keyword)
    for (let i = 0; i < this.listMovie.length; i++) {
      if (this.listMovie[i].TenPhim == keyword || this.listMovie[i].TenPhim.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1) {
        this.searchResult.push(this.listMovie[i]);
      }
    }
    // const index = this.listMovie.findIndex(n => n.TenPhim == keyword || n.TenPhim.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1);
    this.soketqua = this.searchResult.length;
    console.log(this.searchResult)
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
  dangxuat() {
    this.isLoginSuccess = false;
    localStorage.clear();
    this.isShowMenuUser = false;

  }
  constructor(private phim: PhimService) { }

  ngOnInit() {

    this.phim.LayDSPhim().subscribe((res) => {
      console.log(res);
      this.listMovie = res;
    }, (err) => {
      console.log(err)
    })
    let nguoidung = JSON.parse(localStorage.getItem('User'));
    if (nguoidung != null) {
      this.isLoginSuccess = true;
      this.nameUser = nguoidung.TaiKhoan;
    }
    else {
      this.isLoginSuccess = false;
    }
  }

}
