import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  private mediaList;
  private list: any[] = [];
  private nameList: any[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getNew().subscribe(res => {
      this.mediaList = res.json();
      for (let res of this.mediaList) {
        this.list.push(res.file_id);
        this.mediaService.getFile(res.file_id).subscribe(res=>{
          this.nameList.push(res.json().filename);
          console.log(res.json());

        });
      }

    })

    console.log(this.list);
    console.log(this.nameList);
  }

}
