import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/logic/Payment';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  payments : [Payment];
  payment : Payment;

  @Input() bookingID: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList("payments", payments => {
      if(payments){
        this.payments = payments;
        payments.forEach((payment, index) => {
          if(payment.ID_booking == this.bookingID){
            this.payment = payment;
          }
        });
      }
    });

  }

}
