import { FrontComponent } from './../front/front.component';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router'
@Injectable()
export class MediaService {

  private baseUrl: string = 'http://media.mw.metropolia.fi/wbma/';
  private headers = new Headers({ 'Content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private router: Router) { }

  login = (username: string, password: string) => {
    const url: string = this.baseUrl + 'login/';
    const body =
      `{
      "username": "${ username}",
      "password": "${ password}"
    }`
    return this.http.post(url, body, this.options).subscribe(
      (res) => {
        console.log(res.json());
        localStorage.setItem("userToken", JSON.stringify(res.json().token));
        this.router.navigate(['front'])
      }
      , (err) => console.log(err.json())
    );
  }

  register = (username: string, password: string, email: string) => {
    const url: string = this.baseUrl + 'users/';
    const body =
      `{
      "username": "${username}",
      "password": "${ password}",
      "email": "${ email}"
    }`
    console.log(body);
    return this.http.post(url, body, this.options).subscribe((res) => {
      console.log(res.json());
    }
      , (err) => console.log(err.json()));
  }

  getNew = () => {
    return this.http.get(this.baseUrl + 'media?limit=10/');
  }

  getFile = (id: any) => {
    return this.http.get(this.baseUrl + 'media/' + id);
  }

  getTotalLikes = (id: any) => {
    return this.http.get(this.baseUrl + 'favourites/file/' + id);
  }

  getUser = (id: any) => {
    let headers = new Headers({ 'Content-type': 'application/json' });
    headers.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDcsInVzZXJuYW1lIjoiYmFtYm9vIiwiZW1haWwiOiJzcmhheXJoQGdod3NlcmguY29tIiwiZnVsbF9uYW1lIjpudWxsLCJpc19hZG1pbiI6bnVsbCwidGltZV9jcmVhdGVkIjoiMjAxNy0wMi0wMlQxNzowODozNC4wMDBaIiwiaWF0IjoxNDg2NjY5ODAwLCJleHAiOjE0ODg3NDM0MDB9.cSmp77aOXe8NfTQKlRFDO0p4TASJ_bvlqbvAf19TS14');
    let options = new RequestOptions({ headers: headers });
    console.log(options);
    return this.http.get(this.baseUrl + 'users/' + id, options);
  }

  like(id: any) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    headers.append('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMDcsInVzZXJuYW1lIjoiYmFtYm9vIiwiZW1haWwiOiJzcmhheXJoQGdod3NlcmguY29tIiwiZnVsbF9uYW1lIjpudWxsLCJpc19hZG1pbiI6bnVsbCwidGltZV9jcmVhdGVkIjoiMjAxNy0wMi0wMlQxNzowODozNC4wMDBaIiwiaWF0IjoxNDg2NjY5ODAwLCJleHAiOjE0ODg3NDM0MDB9.cSmp77aOXe8NfTQKlRFDO0p4TASJ_bvlqbvAf19TS14');
    let options = new RequestOptions({ headers: headers });
    const body =
      `{
      "file_id": ${id}
    }`
    return this.http.post(this.baseUrl + 'favourites', body, options);
  }
}
