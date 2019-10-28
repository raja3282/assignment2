import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MylistService } from '../mylist.service';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {

  constructor(
    private alertcontroller: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private mylistservice: MylistService,
    ) { }

    country = [];
    singlecountry;

  ngOnInit() {

    this.country = this.mylistservice.getAllCountry();

    this.route.paramMap.subscribe(paramMap => {
      const  val = paramMap.get('id');

      this.singlecountry = this.country.find(obj => {
        return obj.id.includes(val);
      });
    });
  }
  async deletecountry() {
    console.log('deletecountry', this.singlecountry);

    const alert = await this.alertcontroller.create({
header: 'Alert',
message: 'Are you sure you want to remove this country from the list?',
buttons: [
  {
    text: 'Cancel'
  },
  {
    text: 'Okay',
    handler: () => {
      console.log('Confirm Okay');
      this.mylistservice.deleteCountry(this.singlecountry.id);
      this.router.navigateByUrl('/home');
                    }
        }
      ]
    });
    alert.present();
  }
}
