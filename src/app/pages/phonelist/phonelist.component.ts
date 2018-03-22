import { Component, OnInit } from '@angular/core';
import { PhoneApiService } from "../../services/phone-api.service";

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {
  phones: any[] = [];
  constructor(private phonesAPI: PhoneApiService) { }

  ngOnInit() {
    this.phonesAPI.getList()
      .then((phones) => {
        this.phones = phones;
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
