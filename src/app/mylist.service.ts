import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})export class MylistService {
  country = [
    { id: '01', name: 'PAKISTAN', capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '02', name: 'SUADIA ARABIA' , capital: 'ISLAMABAD', continent: ' ASIA'},
    { id: '03', name: 'ROMANIA', capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '04', name: 'UNITED KINGDOM' , capital: 'ISLAMABAD', continent: ' ASIA'},
    { id: '05', name: 'BAHRAIN', capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '06', name: 'KUWAIT' , capital: 'ISLAMABAD', continent: ' ASIA'},
    { id: '07', name: 'CHILLE', capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '08', name: 'CHINA', capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '09', name: 'BRAZIL' , capital: 'ISLAMABAD', continent: ' ASIA' },
    { id: '10', name: 'TURKEY' , capital: 'ISLAMABAD', continent: ' ASIA' }
    ];

  constructor() {}

  get getCountry() {
    return this.country;
  }

  getAllCountry() {
    return this.country;
  }

  AddCountry(nam: string , i: string, cap: string , cont: string ) {
    this.country.push({id : i , name: nam , capital: cap , continent : cont });
  }

  AddCountryByObj(CountryOBJ) {
this.country.push(CountryOBJ);
  }

  deleteCountry(id: string) {
    this.country = this.country.filter(e => {
      return e.id !== id;
    });
  }
}





