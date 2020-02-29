import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/logic/Payment';
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  
  constructor(private data: DataService,
              private cookieService: CookieService
              ) { }
  
  level = 'user';
  token = this.cookieService.get('token');

  payments : [Payment];
  payment : Payment;

  @Input() bookingID: number;


  ngOnInit() {
    this.data.getList(this.level,"payments", this.token, payments => {
      if(payments){
        this.payments = payments;
        payments.forEach(payment => {
          if(payment.ID_booking == this.bookingID){
            this.payment = payment;
          }
        });
      }
    });

  }

}
