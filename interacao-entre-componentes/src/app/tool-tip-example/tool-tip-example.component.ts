import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-tip-example',
  templateUrl: './tool-tip-example.component.html',
  styleUrls: ['./tool-tip-example.component.css']
})
export class ToolTipExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public visible = false;
  public mouse = { x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }

}
