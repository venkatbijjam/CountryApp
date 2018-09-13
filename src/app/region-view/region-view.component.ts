import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {


  constructor(private _activatedrouter: ActivatedRoute, private _router: Router,
    public restcountryservice: CountryService) {

  }

  public allregions = [];
  public regionunique = [];
  public regionDetails: any = []

  ngOnInit() {


    this.getRegionDetails();




  }

  /* get the region details*/

  public getRegionDetails = () => {


    this.restcountryservice.getRegions().subscribe(
      data => {
        this.allregions.push(data);

        this.regionunique = this.removeDuplicates(data, 'region')
        // console.log(this.regionunique)
        this.regionConsolidate();
      },
      error => {
        console.log("region retreving error")

      }
    );
  }

  public regionConsolidate() {
    class RegionDetail {


      public imageurl: string;
      public region: string;
      public areabreif: string;
      public populuation: string;

    }
    var singleRegion: RegionDetail;

    this.regionunique.forEach(element => {
      switch (element.region) {
        case "Asia": {
          //statements; 
          this.generateRegionClass('assets/Images/asiaimage.jpg', `
          Earth's largest and most populous continent, 
          located primarily in the Eastern and Northern Hemispheres.
          covers 9% of the Earth's total surface area (or 30% of its land area),
           and has the largest coastline, at 62,800 kilometres (39,022 mi).
          `, element.region, 58)
          break;
        }
        case "Europe": {
          //statements; 
          this.generateRegionClass('assets/Images/europeimage.jpg', `
          Europe makes up the western fifth of the Eurasian landmass.[21] It has a higher 
          ratio of coast to landmass than any other continent or subcontinent.
          `, element.region, 10)
          break;
        }
        case "Africa": {
          //statements; 
          this.generateRegionClass('assets/Images/africaimage.jpg', `
          
Africa is the world's second largest and second most-populous continent 
(behind Asia in both categories). At about 30.3 million km2 
(11.7 million square miles) including adjacent islands, it 
covers 6% of Earth's total surface area and 20% of its land area.
With 1.2 billion people[1] as of 2016, 
it accounts for about 16% of the world's human population.
          `, element.region, 16)
          break;
        }
        case "Oceania": {
          //statements; 
          this.generateRegionClass('assets/Images/oceainaimage.jpg', `
          Oceania covers an area of 8,525,989 square kilometres (3,291,903 sq mi) and has a
           population of 40 million. Situated in the southeast of the Asia-Pacific region, 
           Oceania is the smallest continental grouping in land area and
           the second smallest in population after Antarctica.
          `, element.region, 0.5)
          break;
        }
        case "Americas": {
          //statements; 
          this.generateRegionClass('assets/Images/americaimage.jpg', `
          The Americas (also collectively called America) comprise the totality 
          of the continents of North and South America.Together, they make up most of
           the land in Earth's western hemisphere and comprise the New World.`, element.region, 13)
          break;
        }
        default: {
          //statements; 
          break;
        }
      }





    });

    // console.log(this.regionDetails);

  }

  public generateRegionClass(url: string, areabreif: string, region: string, population: number): any {
    var singleRegion = {
      imageurl: url,
      areabreif: areabreif,
      region: region,
      population: `Population: ` + population + "%"
    };
    this.regionDetails.push(singleRegion);

  }


  private removeDuplicates(arr, prop) {
    let obj = {};
    return Object.keys(arr.reduce((prev, next) => {
      if (!obj[next[prop]]) obj[next[prop]] = next;
      return obj;
    }, obj)).map((i) => obj[i]);
  }
}
