import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';
import { ToastrService, ToastRef } from 'ngx-toastr';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {


  constructor(private _activatedrouter: ActivatedRoute, private _router: Router,
    public restcountryservice: CountryService,private _location: Location,public toaster:ToastrService) {

  }

  public display=false;
  public countryDetails;
  ngOnInit() {
    this.display = true;
    let countryname: string = this._activatedrouter.snapshot.paramMap.get('countryname');
    //console.log(regionname);
    this.getSingleCountryDetails(countryname);

    window.scrollTo(0, 0)



  }


  /* Go back Opeartion*/



public backClicked =():any  =>{
  this._location.back();
}


public getSingleCountryDetails = (countryname: string) =>{

  this.restcountryservice.getCountryDetails(countryname).subscribe(
    data =>{
      this.countryDetails =data[0];
      
      //console.log(this.countryDetails);
    this.toaster.success('Country details are loaded');
    this.display=false;


    },
    error  =>{
    this.toaster.error('Some error occured while retreving country details');

    }

  )
}



/*
Method to get all countrys by Language
*/
public getAllCountryByLanguage = (language:string):any => { 
  //this.allcountryDetails =[];
  this._router.navigate(['/country/language/',language]);
}


/*
Method to get all countrys by Currency
*/
public getAllCountryByCurrency = (currency:string):any => { 
  //this.allcountryDetails =[];
  this._router.navigate(['/country/currency/',currency]);
 
}

}
