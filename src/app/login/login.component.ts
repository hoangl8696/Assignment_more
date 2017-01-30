import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username_login: any;
  private password_login: any;

  constructor(private service: MediaService) { }

  ngOnInit() {
  }

  login = () => {
    this.service.login(this.username_login, this.password_login);
  }
}
