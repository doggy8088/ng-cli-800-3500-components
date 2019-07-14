import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0900Component } from './page0900.component';

@NgModule({
  declarations: [Page0900Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0900Component }])],
  exports: [Page0900Component]
})
export class Page0900Module {}
