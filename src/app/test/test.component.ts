import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor(private route :ActivatedRoute) {
    const Id = parseInt(this.route.snapshot.params["id"],10);
    console.log(Id);

   }

  ngOnInit(): void {
  }

}
