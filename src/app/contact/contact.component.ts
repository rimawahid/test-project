import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
  }

  addUser(formValues) {
    this.us.addUser(formValues)
    //console.log(userValue.name)
  }
}
