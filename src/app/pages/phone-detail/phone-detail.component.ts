import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PhoneApiService } from '../../services/phone-api.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phone = {
    
    specs: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phoneAPI: PhoneApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDetails(params['id'])
    })
  }

  delete() {
    this.phoneAPI.remove(this.phone._id)
      .then(() => {
        this.router.navigate(['']);
      })
  }

  getDetails(id) {
    this.phoneAPI.get(id)
      .then((phone) => {
        this.phone = phone;
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
