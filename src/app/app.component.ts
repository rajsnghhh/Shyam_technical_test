import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shyamtech_test';
  routerEvents: any;
  currentRoute : any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // router.events.subscribe((url:any) => console.log(url));
    // console.log(router.url);
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          if(event.url == '/'){
            localStorage.removeItem('pageSize')
          }
          this.currentRoute = event.url;
          console.log(this.currentRoute);
          // Prints the current route
          // Eg.- /products
        }
      }
    )
  }


ngOnInit(): void {
  
}
openPostsModule() {
  this.router.navigate(['/Posts']);
}

openToDoModule() {
  this.router.navigate(['/To_Do']);
}

ngOnDestroy(): void {
  this.routerEvents.unsubscribe();
  // Unsubscribe to avoid memory leak
}


}

