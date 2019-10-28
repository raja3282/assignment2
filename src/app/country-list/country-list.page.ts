import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
})
export class CountryListPage implements OnInit {
  constructor(
    private router: Router,
    private Mylistservice: MylistService
    ) { }



country = [];

  ngOnInit() {
    // this.students = this.everythingstudentService.returnStudentsList();

    // this.students = this.studentsListService.getStudents;
     this.country = this.Mylistservice.getAllCountry();
  }

  changeUrl(user) {
    const id = user.id;
    const url = `country-list/${id}`;

    this.router.navigateByUrl(url);
  }

}

