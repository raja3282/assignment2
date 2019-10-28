import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})export class MylistService {
  country = [
    { id: '01', name: 'PAKISTAN' },
    { id: '02', name: 'SUADIA ARABIA' },
    { id: '03', name: 'ROMANIA' },
    { id: '04', name: 'UNITED KINGDOM' },
    { id: '05', name: 'BAHRAIN' },
    { id: '06', name: 'KUWAIT' },
    { id: '07', name: 'CHILLE' },
    { id: '08', name: 'CHINA' },
    { id: '09', name: 'BRAZIL' },
    { id: '10', name: 'TURKEY' }
    ];

  constructor() {}

  get getCountry() {
    return this.country;
  }

  getAllCountry() {
    return this.country;
  }

  deleteCountry(id: string) {
    this.country = this.country.filter(e => {
      return e.id !== id;
    });
  }
}





