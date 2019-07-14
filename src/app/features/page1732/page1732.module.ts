import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1732Component } from './page1732.component';

@NgModule({
  declarations: [Page1732Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1732Component }])],
  exports: [Page1732Component]
})
export class Page1732Module {}
