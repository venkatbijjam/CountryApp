import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-counutry-view',
  templateUrl: './all-counutry-view.component.html',
  styleUrls: ['./all-counutry-view.component.css']
})
export class AllCounutryViewComponent implements OnInit {


  constructor(private _activatedrouter: ActivatedRoute, private _router: Router,
    public restcountryservice: CountryService,private _location: Location) {

  }

  public allcountryDetails =[];

  ngOnInit() {
    let regionname: string = this._activatedrouter.snapshot.paramMap.get('region');
    //console.log(regionname);
    this.getAllCountryByRegion(regionname)

  }

/*
Method to get all countrys by regions
*/
  public getAllCountryByRegion = (region:string):any => { 

    this.restcountryservice.getAllCountryByRegion(region).subscribe(
      data =>
      {
        this.allcountryDetails.push(data);
        console.log(this.allcountryDetails[0][0])
      },
      error =>{
        console.log("error at reteveing country by region")
      }

    )
  }

/*
Method to get all countrys by Language
*/
public getAllCountryByLanguage = (language:string):any => { 
  this.allcountryDetails =[];
  console.log(language)
  this.restcountryservice.getCountiesByLanguage(language).subscribe(
    data =>
    {
      this.allcountryDetails.push(data);
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
  this.allcountryDetails =[];
  this.restcountryservice.getCountiesByCurrency(currency).subscribe(
    data =>
    {
      this.allcountryDetails.push(data);
      console.log(data)
    },
    error =>{
      console.log("error at reteveing country by currency")
    }

  )
}

/* Go back Opeartion*/



public backClicked =():any  =>{
  this._location.back();
}


}
