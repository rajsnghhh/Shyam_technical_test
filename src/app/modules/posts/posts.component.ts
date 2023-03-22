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
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  change: number = 10;
  localdata: any;


  constructor(private service: CommonService, public titlecasePipe: TitleCasePipe) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.localdata = localStorage.getItem("pageSize")
    console.log(this.localdata);
    if(this.localdata){
      this.tableSize = this.localdata
      this.change = this.localdata
    }
  
  }

  fetchPosts() {
    this.service.getDatas('posts').subscribe((res: any) => {
      this.postData = res;
      console.log(this.postData);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  EnterData(e: any) {
    this.tableSize = e.target.value;
    localStorage.setItem("pageSize", this.tableSize.toString());
  }

  ngOnDestroy(){
    localStorage.removeItem('pageSize');
  }
}
