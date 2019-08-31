import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/logic/Payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
  payment : Payment;

  constructor() { }

  ngOnInit() {
  }

}
