import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  toDoData: Array<any> = [];
  tableSize: number = 10;
  change: number = 10;
  localdata: any;

  constructor(private service: CommonService) { }

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
    this.service.getDatas('todos').subscribe((res: any) => {
      this.toDoData = res;
      console.log(this.toDoData,'toDoData');
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
