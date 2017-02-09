import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  test = 'hello';
  private mediaId;
  private media;
  private type;
  private userName;
  private totalLikes;
  private title;
  private description;
  private likes;
  private success;
  private filename;
  private type1;
  private medias: any[] = [];
  constructor(private route: ActivatedRoute, private mediaService: MediaService) {
    this.success = '';
    this.type1 = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.mediaId = params.fileId;
      this.mediaService.getTotalLikes(this.mediaId).subscribe(res => {
        this.totalLikes = res.json().length;
        console.log(this.totalLikes);
      });
      this.mediaService.getFile(this.mediaId).subscribe(res => {
        console.log(res);
        this.media = res.json();
        console.log(this.media);
        this.title = this.media.title;
        this.type = this.media.media_type;
        this.description = this.media.description;
        this.filename = this.media.filename;
        this.medias.push(this.filename);
        console.log(localStorage.getItem('userToken'));
        this.mediaService.getUser(this.media.user_id).subscribe(res => {
          this.userName = res.json().username;
        });
        this.mediaService.getTotalLikes(this.mediaId).subscribe(res => {
          this.likes = res.json().length;
        });
      });
    });

  }

  like() {
    this.mediaService.like(this.mediaId).subscribe(res => {
      console.log(res.json());
    });
  }

}
