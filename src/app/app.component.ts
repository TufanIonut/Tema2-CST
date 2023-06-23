import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App1';
  plans: any[] = [
    {
      type: "MONTHLY",
      price: "$14.95",
      
    },
    {
      type: "3-MONTHLY",
      price: "$38.00"
    },
    {
      type: "ANUALLY",
      price: "$134.00"

    }
  ]

  constructor() {}
}
