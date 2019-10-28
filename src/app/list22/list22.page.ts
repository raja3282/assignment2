import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MylistService } from '../mylist.service';

@Component({
  selector: 'app-list22',
  templateUrl: './list22.page.html',
  styleUrls: ['./list22.page.scss'],
})

export class List22Page implements OnInit {

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
    const url = `countrylist/${id}`;

    this.router.navigateByUrl(url);
  }

}
