import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nums =[1,2,3,4,5,6];
  constructor(private router : RouterModule) { }

  ngOnInit(): void {
  }

}
