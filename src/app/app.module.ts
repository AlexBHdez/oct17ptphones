import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routing";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { PhonelistComponent } from './pages/phonelist/phonelist.component';
import { PhoneApiService } from "./services/phone-api.service";
import { PhoneDetailComponent } from './pages/phone-detail/phone-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
