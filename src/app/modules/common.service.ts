import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getDatas(res: any): any {
    return this.http.get(`https://jsonplaceholder.typicode.com/${res}`)
  }
}
