import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  toDoData: Array<any> = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.service.getDatas('todos').subscribe((res: any) => {
      this.toDoData = res;
      console.log( this.toDoData);
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
}
