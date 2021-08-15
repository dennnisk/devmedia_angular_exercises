import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho-paises',
  templateUrl: './filho-paises.component.html',
  styleUrls: ['./filho-paises.component.css']
})
export class FilhoPaisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pais: string = "";

  ngOnChanges(changes: SimpleChanges){
    for(let change in changes)
    {
    this.pais = (changes[change].currentValue && changes[change].currentValue.trim()) || '<País não informado>';
    }
  }

  @Output() votado = new EventEmitter<string>();

  vota(pais: string) {
    this.votado.emit(pais);
  }

}
