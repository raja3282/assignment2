import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.page.html',
  styleUrls: ['./add-country.page.scss'],
})
export class AddCountryPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mylistservice: MylistService  ) {}

  country = [];
  id: string;
  capital: string;
  continent: string;
  name: string;

  ngOnInit() {}

  async Addcountry() {
    const obj = {
      name: this.name,
      id: this.id,
      capital: this.capital,
      continent: this.continent
    };
    // way 1
    this.mylistservice.AddCountryByObj(obj);

    // way 2
    // this.carslistservice.AddCars(this.reg, this.model, this.name);
    this.router.navigateByUrl('/country-list');
  }
}
/*async AddCars() {
  const alert = await this.alertController.create({
    header: 'Alert',
    message: `Your CAR ${this.singlecar.name} IS SUCCESFULLY ADDED!`,
    // buttons: ['OK']
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.carslistservice.AddCars(this.singlecar.reg , this.singlecar.model , this.singlecar.name);
          this.router.navigateByUrl('/cars-list');
        }
      }
    ]
  });

  alert.present();

}*/
