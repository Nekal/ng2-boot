import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})
export class AuthComponent implements OnInit{
  user: User = new User();

  ngOnInit() {

  }

  auth() {
    this.login();
  }

  login() {
    console.log(JSON.stringify(this.user));
  }
}
