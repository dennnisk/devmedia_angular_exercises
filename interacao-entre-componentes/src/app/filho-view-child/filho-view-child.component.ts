import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho-view-child',
  templateUrl: './filho-view-child.component.html',
  styleUrls: ['./filho-view-child.component.css']
})
export class FilhoViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = 'Eduardo';

}
