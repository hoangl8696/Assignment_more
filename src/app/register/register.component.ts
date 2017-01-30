import { Router } from '@angular/router';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username_register: any;
  private password_register: any;
  private email_register: any;

  constructor(private service: MediaService, private router:Router) { }

  ngOnInit() {
  }

  register = () => {
    this.service.register(this.username_register, this.password_register, this.email_register);
    console.log(this.username_register, this.password_register);
    this.router.navigate(['front']);

  }
}
