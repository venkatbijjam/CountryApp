import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';

import { ToastrService, ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-all-counutry-view',
  templateUrl: './all-counutry-view.component.html',
  styleUrls: ['./all-counutry-view.component.css']
})
export class AllCounutryViewComponent implements OnInit {


  constructor(private _activatedrouter: ActivatedRoute, private _router: Router,
    public restcountryservice: CountryService, private _location: Location, public toaster: ToastrService) {

  }
  public p;
  public display = false;
  public displayContent = false;

  public allcountryDetails = [];
  public filter;


  ngOnInit() {
    this.display = true;
    let regionname: string = this._activatedrouter.snapshot.paramMap.get('region');
    //console.log(regionname);
    console.log(regionname)
    if (regionname != null || regionname != undefined) {

      this.getAllCountryByRegion(regionname)

    }

    let currencycode: string = this._activatedrouter.snapshot.paramMap.get('currencycode');
    if (currencycode != null || currencycode != undefined) {
      this.getAllCountryByCurrency(currencycode);
      // console.log(currencycode);
      this.filter = "Countrys with Currency Filter Applied";
    }

    let languagecode: string = this._activatedrouter.snapshot.paramMap.get('languagecode');
    if (languagecode != null || languagecode != undefined) {
      this.getAllCountryByLanguage(languagecode);
      console.log(languagecode);
      this.filter = "Countrys with Language Filter Applied";
    }

    window.scrollTo(0, 0)
  }

  /*
  Method to get all countrys by regions
  */
  public getAllCountryByRegion = (region: string): any => {

    this.restcountryservice.getAllCountryByRegion(region).subscribe(
      data => {
        this.allcountryDetails.push(data);

        this.toaster.success('All Country details are loaded');
        this.display = false;
        this.displayContent = true;

      },
      error => {
        this.toaster.error("error at reteveing country by region");

      }

    )
  }

  /*
  Method to get all countrys by Language
  */
  public getAllCountryByLanguage = (language: string): any => {
    this.allcountryDetails = [];
    console.log(language)
    this.restcountryservice.getCountiesByLanguage(language).subscribe(
      data => {
        this.allcountryDetails.push(data);
        this.toaster.success('Language fillter Applied');

        this.display = false;
        this.displayContent = true;


      },
      error => {
        // console.log("error at reteveing country by language")
        this.toaster.error("error at retreving country by Langauge");

      }

    )
  }


  /*
  Method to get all countrys by Currency
  */
  public getAllCountryByCurrency = (currency: string): any => {
    this.allcountryDetails = [];
    this.restcountryservice.getCountiesByCurrency(currency).subscribe(
      data => {
        this.allcountryDetails.push(data);
        //  console.log(data)
        this.toaster.success('Currency fillter Applied');
        this.display = false;
        this.displayContent = true;



      },

      error => {

        this.toaster.error("error at retreving country by currency")

      }

    )
  }

  /* Go back Opeartion*/



  public backClicked = (): any => {
    this._location.back();
  }


}
