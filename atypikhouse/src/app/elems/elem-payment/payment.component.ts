import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/logic/Payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: []
})
export class PaymentComponent implements OnInit {
  payment : Payment;

  constructor() { }

  ngOnInit() {
  }

}
