import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shyamtech_test';
  index: number = 0;

  constructor(private router: Router){}

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

  openPostsModule() {
    console.log(true);
    
    this.router.navigate(['/Posts']);
  }
}

