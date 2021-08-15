import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  readonly apiURL : string = "https://jsonplaceholder.typicode.com";

  public usersLists : any = [];

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
  }

  listarTodosUsers() {
    this.http.get(`${ this.apiURL }/users`)
      .subscribe((resultado: any) => {
        this.usersLists = resultado;
        console.log(resultado)
      });
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
      //,      'Authorization': `Bearer 71f301f3844b1b1b151ec5c48502f19bbd774c881c49afb099acf84facd77971`
    });
  }

  listarUserPorId() {
    this.http.get(`${ this.apiURL }/users/1`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('User não localizado.');
                  }
                }
              );
  }

  adicionarUser() {
    var user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    
  
    this.http.post(`${ this.apiURL }/users`, user, { headers: this.getHeaders() })
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
  }

  alterarUser() {
    var user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
  
    this.http.patch(`${ this.apiURL }/users/99`, user, { headers: this.getHeaders() })
              .subscribe(
                resultado => {
                  console.log('User alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Usuario não localizado.');
                      break;
                  }
                }
              );
  }

  excluirUser(id: any) {
    this.http.delete(`${ this.apiURL }/users/${id}`)
              .subscribe(
                resultado => {
                  this.listarTodosUsers();
                  console.log('User excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('User não localizado.');
                  }
                }
              );
  }


  //this.http;

}
