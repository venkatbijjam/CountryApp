import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {


  constructor(private _activatedrouter: ActivatedRoute, private _router: Router,
    public restcountryservice: CountryService,private _location: Location) {

  }

  public countryDetails=[];
  ngOnInit() {
    let countryname: string = this._activatedrouter.snapshot.paramMap.get('country');
    //console.log(regionname);
    
  this.getAllCountryByLanguage('es');
  }


  /* Go back Opeartion*/



public backClicked =():any  =>{
  this._location.back();
}


public getSingleCountryDetails = (countryname: string) =>{

  this.restcountryservice.getCountryDetails(countryname).subscribe(
    data =>{
      this.countryDetails.push(data);
      console.log(this.countryDetails);
    },
    error  =>{
    console.log("Some error occured while retreving counrty details")
    }

  )
}



/*
Method to get all countrys by Language
*/
public getAllCountryByLanguage = (language:string):any => { 
  //this.allcountryDetails =[];
  console.log(language)
  this.restcountryservice.getCountiesByLanguage(language).subscribe(
    data =>
    {
     // this.allcountryDetails.push(data);
      this._router.navigate(['/allcountry',language]);
    },
    error =>{
      console.log("error at reteveing country by language")
    }

  )
}


/*
Method to get all countrys by Currency
*/
public getAllCountryByCurrency = (currency:string):any => { 
  //this.allcountryDetails =[];
  this.restcountryservice.getCountiesByCurrency(currency).subscribe(
    data =>
    {
     // this.allcountryDetails.push(data);
      console.log(data)
    },
    error =>{
      console.log("error at reteveing country by currency")
    }

  )
}

}
