import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonService } from '../../sharedModule/common.service';

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

  constructor(private service: CommonService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchToDo();
    this.localdata = localStorage.getItem("tableSize")
    // console.log(this.localdata);
    if (this.localdata) {
      this.tableSize = this.localdata
      this.change = this.localdata
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  fetchToDo() {
    this.service.getDatas('todos').subscribe((res: any) => {
      this.toDoData = res;
      console.log(this.toDoData, 'toDoData');
    })
  }

  enterData(e: any) {
    this.tableSize = e.target.value;
    this.fetchToDo();
    localStorage.setItem("tableSize", this.tableSize.toString());
  }

  ngOnDestroy() {
    localStorage.removeItem('tableSize');
  }
}
