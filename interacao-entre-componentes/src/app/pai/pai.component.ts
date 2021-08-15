import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { FilhoViewChildComponent }  from '../filho-view-child/filho-view-child.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nomePai = 'Eduardo';

  nomes = ['Phil', 'Mark', ' ', 'June'];

  paises = ['Brasil', 'Estados Unidos', ' ', 'Israel'];

  @Input() votado: string = "";

  onVoted(votado: string) {
    this.votado = votado;
  }

  //
  // Injeção de componentes com o decorator @ViewChild
  //
  @ViewChild(FilhoViewChildComponent, {static: false})

  private filhoViewChildComponent: FilhoViewChildComponent | undefined;

  nome: string | undefined;

  ngAfterViewInit() {
    setTimeout(() => this.nome = this.filhoViewChildComponent?.nome, 0);
  }

}
