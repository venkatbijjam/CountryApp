import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';


/* import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {forkJoin} from 'rxjs'; 
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http:HttpClient) {
   
}


  //base url
  public baseUrl='https://restcountries.eu/rest/v2';


  //get all the regions
  public getRegions =() => {

    return this._http.get(this.baseUrl+ '/all?fields=region')

  }

  // get countrys by Region
  public getAllCountryByRegion = (regionName:string) => {
    return this._http.get(this.baseUrl +'/region/'+regionName)
  }


  //get single country details 
  public getCountryDetails = (countryName: string) =>{
    return this._http.get(this.baseUrl+'/name/'+countryName)
  }

  // get countrys by Currency
  public getCountiesByCurrency = (currencyName: string) => {
    return this._http.get(this.baseUrl+'/currency/'+ currencyName)

  }


  //get country by language
  public getCountiesByLanguage= (languageName: string) => {
    return this._http.get(this.baseUrl+'/lang/'+ languageName)

  }

}
