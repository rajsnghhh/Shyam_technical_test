import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postData: Array<any> = [];
  tableSize: number = 10;
  change: number = 10;
  localdata: any;

  constructor(private service: CommonService, public titlecasePipe: TitleCasePipe) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.localdata = localStorage.getItem("tableSize")
    console.log(this.localdata);
    if (this.localdata) {
      this.tableSize = this.localdata
      this.change = this.localdata
    }

  }

  fetchPosts() {
    this.service.getDatas('posts').subscribe((res: any) => {
      this.postData = res;
      console.log(this.postData,'postData');
    })
  }


  enterData(e: any) {
    this.tableSize = e.target.value;
    this.fetchPosts();
    localStorage.setItem("tableSize", this.tableSize.toString());
  }

  ngOnDestroy() {
    localStorage.removeItem('tableSize');
  }



}
