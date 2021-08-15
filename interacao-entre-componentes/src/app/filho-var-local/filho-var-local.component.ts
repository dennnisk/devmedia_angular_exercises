import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho-var-local',
  templateUrl: './filho-var-local.component.html',
  styleUrls: ['./filho-var-local.component.css']
})
export class FilhoVarLocalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = 'Clark Kent';

}
