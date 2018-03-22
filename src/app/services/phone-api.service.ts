import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PhoneApiService {
  BASE_URL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(`${this.BASE_URL}/phones`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error)
      })
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/phones/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error)
      })
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/phones/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error) => {
        console.log(error)
      })
  }
}
