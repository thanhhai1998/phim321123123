import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#111111",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "fgsColor": "#f95809",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "folding-cube",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(255,255,255)",
  "pbColor": "#00ACC1",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "threshold": 500
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), NgxUiLoaderRouterModule,
    AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, LoadingBarRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
