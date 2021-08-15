import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { FilhoPaisesComponent } from './filho-paises/filho-paises.component';
import { FilhoVarLocalComponent } from './filho-var-local/filho-var-local.component';
import { FilhoViewChildComponent } from './filho-view-child/filho-view-child.component';
import { ToolTipExampleComponent } from './tool-tip-example/tool-tip-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    FilhoPaisesComponent,
    FilhoVarLocalComponent,
    FilhoViewChildComponent,
    ToolTipExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
