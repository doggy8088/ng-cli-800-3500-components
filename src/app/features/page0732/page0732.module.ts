import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0732Component } from './page0732.component';

@NgModule({
  declarations: [Page0732Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0732Component }])],
  exports: [Page0732Component]
})
export class Page0732Module {}
