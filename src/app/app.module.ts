import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CountryService } from './country.service';
import { RegionViewComponent } from './region-view/region-view.component';
import { AllCounutryViewComponent } from './all-counutry-view/all-counutry-view.component';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { CountryViewComponent } from './country-view/country-view.component';
@NgModule({
  declarations: [
    AppComponent,
    RegionViewComponent,
    AllCounutryViewComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      [
        { path: 'view', component: RegionViewComponent },
      { path:'', redirectTo:'view',pathMatch:'full'},
      {path:'allcountry/:region',component:AllCounutryViewComponent},
      {path:'country/:countryname',component:CountryViewComponent}
      
      ]
    )
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}